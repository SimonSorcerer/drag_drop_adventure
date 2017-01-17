import React                   from 'react';
import { getItem }             from '../managers/item';
import { publish, eventTypes } from '../managers/bus';
import * as dragManager        from '../managers/drag';
import ClassHelper             from '../helpers/class';

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            draggedOver: false,
            draggedElement: null,
            item: getItem(this.props.id)
        };
    }

    isOverItself(e) {
        return e.target === this.state.draggedElement;
    }

    handleDragStart(e) {
        dragManager.dragged.set(this.props.id);
        this.setState({ draggedElement: e.target });
    }

    handleDragEnd(e) {
        dragManager.dragged.clear();
        this.setState({ draggedOver: false });
    }

    handleDragEnter(e) {
        var draggedItem = getItem(dragManager.dragged.id);

        e.stopPropagation();
        dragManager.draggedOver.set(this.props.id);
        if (!this.isOverItself(e)) {
            this.setState({ draggedOver: true });
        }
    }

    handleDragLeave(e) {
        var draggedItem = getItem(dragManager.dragged.id);

        e.stopPropagation();
        dragManager.draggedOver.clear();
        this.setState({ draggedOver: false });
    }

    handleDrop(e) {
        this.setState({ draggedOver: false });
    }

    handleMouseEnter(e) {
        if (!this.state.draggedOver) {
            publish(eventTypes.console, 'Look at ' + this.state.item.label);
        }
    }

    handleMouseLeave(e) {
        publish(eventTypes.console, '');
    }

    handleClick(e) {
        publish(eventTypes.description, { item: this.state.item });
    }

    render() {
        var classHelper = ClassHelper.build(['item']);

        if (this.state.item.canPick) {
            classHelper.add('pickable');
        }

        if (this.state.draggedOver) {
            classHelper.add('draggedOver');
        } else {
            classHelper.remove('draggedOver');
        }

        return <span className={ classHelper.toString() } draggable={ this.state.item.canPick ? true : false }
                    onDragStart={ this.handleDragStart.bind(this) } onDragEnd={ this.handleDragEnd.bind(this) } onDragEnter={ this.handleDragEnter.bind(this) }
                    onDragLeave={ this.handleDragLeave.bind(this) } onDrop={ this.handleDrop.bind(this) }
                    onMouseEnter={ this.handleMouseEnter.bind(this) } onMouseLeave={ this.handleMouseLeave.bind(this) }
                    onClick={ this.handleClick.bind(this) }>
                    { this.state.item.label }
               </span>;
    }
}
