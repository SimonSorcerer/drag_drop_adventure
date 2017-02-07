import React, { Component } from 'react';
import ClassHelper          from '../helpers/class';

export default class Item extends Component {
    render() {
        const classHelper = ClassHelper.build(['item']);

        if (this.props.canBePicked) {
            classHelper.add('pickable');
        }

        if (this.props.draggedOver) {
            classHelper.add('draggedOver');
        }

        return <span className={ classHelper.toString() } draggable={ this.props.canBePicked ? true : false }
                    onDragStart={ this.props.handleDragStart.bind(this) }
                    onDragEnd={ this.props.handleDragEnd.bind(this) }
                    onDragEnter={ this.props.handleDragEnter.bind(this) }
                    onDragLeave={ this.props.handleDragLeave.bind(this) }
                    onDrop={ this.props.handleDrop.bind(this) }
                    onMouseEnter={ this.props.handleMouseEnter.bind(this) }
                    onMouseLeave={ this.props.handleMouseLeave.bind(this) }
                    onClick={ this.props.handleClick.bind(this) }>
                    { this.props.label }
               </span>;
    }
}
