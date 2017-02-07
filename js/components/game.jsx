import React       from 'react';
import Console     from '../containers/console';
import Inventory   from '../containers/inventory';
import Location    from './location.jsx';
import Description from '../containers/description';

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
