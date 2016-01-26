var React = require('react'),
    Item = require('./item.jsx'),
    dragManager = require('../managers/drag'),
    itemManager = require('../managers/item'),
    eventBus = require('../managers/bus'),
    ClassHelper = require('../helpers/class');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            items: ['passport'],
            draggedOver: false
        };
    },
    handleDragOver: function (e) {
        this.setState({ draggedOver: true });
    },
    handleDragEnter: function (e) {
        dragManager.inventory.enter();
    },
    handleDragLeave: function (e) {
        dragManager.inventory.leave();
        this.setState({ draggedOver: false });
    },
    handleDrop: function (e) {
        var key = dragManager.dragged.id,
            items = this.state.items;
        
        if (items.indexOf(key) === -1) {
            items.push(key);
        }
        
        dragManager.dragged.clear();
        this.setState({ draggedOver: false });
    },
    writeContent: function () {
        var items = this.state.items,
            content = [];
        
        for (var i = 0; i < items.length; i++) {
            content.push(<Item key={ items[i] } id={ items[i] } />);
        }
        
        return content;
    },
    render: function () {
        var classHelper = ClassHelper.build(['items']),
            content = '';
                    
        if (this.state.draggedOver) {
            classHelper.add('draggedOver');
        }
        
        return <div onDrop={ this.handleDrop } className="box inventory">
            <h2>Your inventory:</h2>
            <div onDragOver={ this.handleDragOver } 
                onDragEnter={ this.handleDragEnter }
                onDragLeave={ this.handleDragLeave } 
                className={ classHelper.toString() }>
                { this.writeContent() }
            </div>
        </div>;
    }
});