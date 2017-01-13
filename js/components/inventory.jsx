import React            from 'react';
import Item             from './item.jsx';
import * as dragManager from '../managers/drag';
import ClassHelper      from '../helpers/class';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['passport'],
            draggedOver: false
        };
    }

    handleDragOver(e) {
        this.setState({ draggedOver: true });
    }

    handleDragEnter(e) {
        dragManager.inventory.enter();
    }

    handleDragLeave(e) {
        dragManager.inventory.leave();
        this.setState({ draggedOver: false });
    }

    handleDrop(e) {
        var key = dragManager.dragged.id,
            items = this.state.items;

        if (items.indexOf(key) === -1) {
            items.push(key);
        }

        dragManager.dragged.clear();
        this.setState({ draggedOver: false });
    }

    writeContent() {
        var items = this.state.items,
            content = [];

        for (var i = 0; i < items.length; i++) {
            content.push(<Item key={ items[i] } id={ items[i] } />);
        }

        return content;
    }

    render() {
        var classHelper = ClassHelper.build(['items']),
            content = '';

        if (this.state.draggedOver) {
            classHelper.add('draggedOver');
        }

        return <div onDrop={ this.handleDrop.bind(this) } className='box inventory'>
            <h2>Your inventory:</h2>
            <div onDragOver={ this.handleDragOver.bind(this) }
                onDragEnter={ this.handleDragEnter.bind(this) }
                onDragLeave={ this.handleDragLeave.bind(this) }
                className={ classHelper.toString() }>
                { this.writeContent() }
            </div>
        </div>;
    }
}
