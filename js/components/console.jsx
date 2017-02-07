import React, { Component }     from 'react';

export default class Console extends Component {
    render() {
        return (
            <div className='box console'>
                { this.props.message }
            </div>
        );
    }
}
