import React, { Component } from 'react';
import ClassHelper          from '../helpers/class';

export default class Description extends Component {
    writeContent() {
        return this.props.memory.map((record, index) => { return <div className='record' key={ index }>{ record }</div> })
    }

    render() {
        const classHelper = ClassHelper.build(['box', 'description']);

        return <div className={ classHelper.toString() }>
            { this.writeContent() }
        </div>;
    }
}
