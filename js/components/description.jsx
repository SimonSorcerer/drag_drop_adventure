var React = require('react'),
    ItemManager = require('../managers/item');
    
module.exports = React.createClass({
    render: function () {
        var itemManager = ItemManager.build(),
            item = itemManager.get(this.props.itemId);
        
        return <div className='box description'>
            { item.description }
        </div>;
    }
});