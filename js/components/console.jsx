import React                    from 'react';
import { register, eventTypes } from '../managers/bus';

export default class Console extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };
        register(eventTypes.console, this.write.bind(this));
    }

    write(message) {
        this.setState({ message: message });
    }

    clear() {
        this.setState({ message: '' })
    }

    render() {
        return <div className='box console'>
            { this.state.message }
        </div>;
    }
}
