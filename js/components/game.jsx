import React     from 'react';
import Console   from './console.jsx';
import Inventory from './inventory.jsx';
import Location  from './location.jsx';

export default class Game extends React.Component {
    handleDragOver(e) {
        e.preventDefault();
    }

    render() {
        return <div onDragOver={ this.handleDragOver.bind(this) } className='game'>
            <h2>Hello this is drag and drop game prototype!</h2>
            <Location />
            <Console />
            <Inventory />
        </div>;
    }
}
