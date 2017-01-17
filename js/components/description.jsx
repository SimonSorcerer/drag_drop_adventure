import React                    from 'react';
import { register, eventTypes } from '../managers/bus';

export default class Description extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memory: []
        };

        register(eventTypes.description, (payload) => {
            this.addRecord(payload.item);
        });
    }

    addRecord(item) {
        if (item && item.description) {
            this.setState({
                memory: [item.description, ...this.state.memory]
            });
        }
    }

    render() {
        const className = 'box description' + (this.state.minimized ? ' minimized' : '');
        let records = [];

        for (let record of this.state.memory) {
            records.push(<div className='record' key={ records.length }>{ record }</div>);
        }

        return <div className={ className }>
            { records }
        </div>;
    }
}
