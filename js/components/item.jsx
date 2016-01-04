var React = require('react'),
    ClassHelper = require('../helpers/class.js');

module.exports = React.createClass({
    getInitialState: function () {
        return { 
            draggedOver: false,
            draggedElement: null
        };
    },
    isOverItself: function (e) {
        return e.target === this.state.draggedElement;
    },
    handleDrag: function (e) {
        //console.log('dragging');
    },
    handleDragStart: function (e) {
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
        //console.error('dropped on valid target');
    },
    render: function () {
        var classHelper = ClassHelper.build(['item']);
        
        if (this.props.canPick) {
            classHelper.add('pickable');
        }
        
        if (this.state.draggedOver) {
            classHelper.add('draggedOver');
        } else {
            classHelper.remove('draggedOver');
        }
        
        return <span className={ classHelper.toString() } draggable={ this.props.canPick ? true : false } 
                    onDrag={ this.handleDrag } onDragStart={ this.handleDragStart } onDragEnd={ this.handleDragEnd }
                    onDragEnter={ this.handleDragEnter } onDragLeave={ this.handleDragLeave }
                    onDrop={ this.handleDrop }>
                    { this.props.label }
               </span>;
    }
});