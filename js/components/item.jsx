var React = require('react'),
    ItemManager = require('../managers/item'),
    ClassHelper = require('../helpers/class');
    
module.exports = React.createClass({
    getInitialState: function () {
        return { 
            draggedOver: false,
            draggedElement: null
        };
    },
    isOverItself: function (e) {
        //console.log('e.target: ' + e.target);
        //console.log('this.state.draggedElement: ' + this.state.draggedElement);
        return e.target === this.state.draggedElement;
    },
    handleDrag: function (e) {
        //console.log('dragging');
    },
    handleDragStart: function (e) {
        e.dataTransfer.setData("text/plain", this.props.id);
        this.setState({ draggedElement: e.target });
        //console.warn('drag starts!');
    },
    handleDragEnd: function (e) {
        this.setState({ draggedOver: false });
        //console.warn('drag ends!');
    },
    handleDragEnter: function (e) {
        if (!this.isOverItself(e)) {
            this.setState({ draggedOver: true });
        }
        //console.warn('you have entered area over valid drag target');
    },
    handleDragLeave: function (e) {
        this.setState({ draggedOver: false });
        //console.warn('left valid drag target');
    },
    handleDrop: function (e) {
        this.setState({ draggedOver: false });
        //console.error('dropped on valid target');
    },
    render: function () {
        var itemManager = ItemManager.build(),
            classHelper = ClassHelper.build(['item']),
            item = itemManager.get(this.props.id);
        
        if (item.canPick) {
            classHelper.add('pickable');
        }
        
        if (this.state.draggedOver) {
            classHelper.add('draggedOver');
        } else {
            classHelper.remove('draggedOver');
        }
        
        return <span className={ classHelper.toString() } draggable={ item.canPick ? true : false } 
                    onDrag={ this.handleDrag } onDragStart={ this.handleDragStart } onDragEnd={ this.handleDragEnd }
                    onDragEnter={ this.handleDragEnter } onDragLeave={ this.handleDragLeave }
                    onDrop={ this.handleDrop }>
                    { item.label }
               </span>;
    }
});