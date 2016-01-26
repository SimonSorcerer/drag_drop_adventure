var React = require('react'),
    itemManager = require('../managers/item'),
    eventBus = require('../managers/bus'),
    dragManager = require('../managers/drag'),
    ClassHelper = require('../helpers/class');
    
module.exports = React.createClass({
    getInitialState: function () {
        return { 
            draggedOver: false,
            draggedElement: null,
            item: itemManager.get(this.props.id)
        };
    },
    isOverItself: function (e) {
        return e.target === this.state.draggedElement;
    },
    handleDragStart: function (e) {
        dragManager.dragged.set(this.props.id);
        this.setState({ draggedElement: e.target });
    },
    handleDragEnd: function (e) {
        dragManager.dragged.clear();
        this.setState({ draggedOver: false });
    },
    handleDragEnter: function (e) {
        var draggedItem = itemManager.get(dragManager.dragged.id);
        
        e.stopPropagation();
        dragManager.draggedOver.set(this.props.id);
        if (!this.isOverItself(e)) {
            this.setState({ draggedOver: true });
        }
    },
    handleDragLeave: function (e) {
        var draggedItem = itemManager.get(dragManager.dragged.id);
        
        e.stopPropagation();
        dragManager.draggedOver.clear();
        this.setState({ draggedOver: false });
    },
    handleDrop: function (e) {
        this.setState({ draggedOver: false });
    },
    handleMouseEnter: function (e) {
        if (!this.state.draggedOver) {
            eventBus.publish(eventBus.types.console, 'Look at ' + this.state.item.label);
        }
    },
    handleMouseLeave: function (e) {
        eventBus.publish(eventBus.types.console, '');
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