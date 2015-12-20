var React = require('react'),
    Item = require('./item.jsx');
    
module.exports = React.createClass({
    render: function () {
        return <div className='location'>
            This is a description of a location with some <Item label='key' canPick /> and another random <Item label='item' canPick />.
            These items can be picked up, but there is also a stationary <Item label='door' /> with a <Item label='padlock' /> on it.
            You can try using items from your inventory on these and see what happens.
            The door is facing north, but there is also an exit to the east.
            <ul>
                <li>To pick up an item, drag and drop it into your inventory.</li>
                <li>To use an item, drag it on another item. The console will indicate what action is going to be performed and once
            you drop the item, it will display the resuls.</li>
            </ul>
        </div>;
    }
});