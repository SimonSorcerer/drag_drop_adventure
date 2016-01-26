var React = require('react'),
    itemManager = require('../managers/item');
    
module.exports = React.createClass({
    render: function () {
        var item = itemManager.get(this.props.itemId);
        
        return <div className='box description'>
            { item.description }
        </div>;
    }
});