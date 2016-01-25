var React = require('react'),
    ItemManager = require('../managers/item'),
    EventBus = require('../managers/bus'),
    ClassHelper = require('../helpers/class');
    
module.exports = React.createClass({
    getInitialState: function () {
        var itemManager = ItemManager.build();
            
        return { 
            draggedOver: false,
            draggedElement: null,
            item:  itemManager.get(this.props.id)
        };
    },
    isOverItself: function (e) {
        return e.target === this.state.draggedElement;
    },
    handleDragStart: function (e) {
        e.dataTransfer.setData('text/plain', this.props.id);

        this.setState({ draggedElement: e.target });
    },
    handleDragEnd: function (e) {
        this.setState({ draggedOver: false });
    },
    handleDragEnter: function (e) {
        var eventBus = EventBus.build();
        
        console.log('count: ' + e.dataTransfer.items.length);
        
        if (!this.isOverItself(e)) {
            this.setState({ draggedOver: true });
            eventBus.publish(EventBus.types.console, 'Use ' + e.dataTransfer.getData('text/plain') + ' with ' + this.state.item.label);
        } else {
            eventBus.publish(EventBus.types.console, 'Use ' + this.state.item.label + ' with ');
        }
    },
    handleDragLeave: function (e) {
        this.setState({ draggedOver: false });
    },
    handleDrop: function (e) {
        this.setState({ draggedOver: false });
    },
    handleMouseEnter: function (e) {
        var eventBus = EventBus.build();
        
        if (!this.state.draggedOver) {
            eventBus.publish(EventBus.types.console, 'Look at ' + this.state.item.label);
        }
    },
    handleMouseLeave: function (e) {
        var eventBus = EventBus.build();
        
        eventBus.publish(EventBus.types.console, '');
    },
    render: function () {
        var classHelper = ClassHelper.build(['item']);
        
        if (this.state.item.canPick) {
            classHelper.add('pickable');
        }
        
        if (this.state.draggedOver) {
            classHelper.add('draggedOver');
        } else {
            classHelper.remove('draggedOver');
        }
        
        return <span className={ classHelper.toString() } draggable={ this.state.item.canPick ? true : false } 
                    onDrag={ this.handleDrag } onDragStart={ this.handleDragStart } onDragEnd={ this.handleDragEnd }
                    onDragEnter={ this.handleDragEnter } onDragLeave={ this.handleDragLeave }
                    onDrop={ this.handleDrop } onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
                    { this.state.item.label }
               </span>;
    }
});