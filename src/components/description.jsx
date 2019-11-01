import React, { Component } from 'react';
import ClassHelper          from '../helpers/class';

export default class Description extends Component {
    getRecordDom(record, index) {
        const classHelper = ClassHelper.build(['record']);

        if (index !== 0) {
            classHelper.add('old');
        }

        return <div className={ classHelper.toString() } key={ index }>
            <span className='prefix'>{ record.prefix }:&nbsp;</span>
            { record.description }
        </div>
    }

    writeContent() {
        return this.props.memory.map((record, index) => {
            return this.getRecordDom(record, index)
        })
    }

    render() {
        const classHelper = ClassHelper.build(['box', 'description']);

        return <div className={ classHelper.toString() }>
            { this.writeContent() }
        </div>;
    }
}
