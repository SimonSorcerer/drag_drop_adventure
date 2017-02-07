import React, { Component } from 'react';
import Item                 from '../containers/item';
import ClassHelper          from '../helpers/class';

export default class Inventory extends Component {
    writeContent() {
        return this.props.items.map((item) => { return <Item key={ item } item={ item } /> })
    }

    render() {
        const classHelper = ClassHelper.build(['items']);

        if (this.props.draggedOver) {
            classHelper.add('draggedOver');
        }

        return <div onDrop={ this.props.handleDrop.bind(this) } className='box inventory'>
            <h2>Your inventory:</h2>
            <div className={ classHelper.toString() }
                onDragEnter={ this.props.handleDragEnter.bind(this) }
                onDragLeave={ this.props.handleDragLeave.bind(this) }>
                { this.writeContent() }
            </div>
        </div>;
    }
}
