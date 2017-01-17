import React       from 'react';
import Console     from './console.jsx';
import Inventory   from './inventory.jsx';
import Location    from './location.jsx';
import Description from './description.jsx';

export default class Game extends React.Component {
    handleDragOver(e) {
        e.preventDefault();
    }

    render() {
        return <div onDragOver={ this.handleDragOver.bind(this) } className='game'>
            <Location />
            <Description />
            <Console />
            <Inventory />
        </div>;
    }
}
