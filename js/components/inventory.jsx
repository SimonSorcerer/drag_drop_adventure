import { Component } from 'react';
import Item          from './item.jsx';
import ClassHelper   from '../helpers/class';

export default class Inventory extends Component {
    writeContent() {
        var items = this.props.items,
            content = [];

        for (var i = 0; i < items.length; i++) {
            content.push(<Item key={ items[i] } id={ items[i] } />);
        }

        return content;
    }

    render() {
        var classHelper = ClassHelper.build(['items']);

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
