import React, { Component }     from 'react';
import { register, eventTypes } from '../managers/bus';

export default class Console extends Component {
    render() {
        return (
            <div className='box console'>
                { this.props.message }
            </div>
        );
    }
}
