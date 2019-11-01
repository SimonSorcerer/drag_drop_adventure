import React, { Component } from 'react';
import Item  from '../containers/item';

export default class Location extends Component {
    render() {
        return <div className='location'>
            This is a description of a location with some <Item id='padlock_key' /> and another random <Item id='item' />.
            These items can be picked up, but there is also a stationary <Item id='door' /> with a <Item id='padlock' /> on it.
            You can try using items from your inventory on these and see what happens.
            The door is facing north, but there is also an exit to the east.
            <ul>
                <li>To pick up an item, drag and drop it into your inventory.</li>
                <li>To use an item, drag it on another item. The console will indicate what action is going to be performed and once
            you drop the item, it will display the resuls.</li>
            </ul>
        </div>;
    }
};
