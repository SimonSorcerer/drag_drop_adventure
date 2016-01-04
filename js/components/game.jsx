var React = require('react'),
    Console = require('./console.jsx'),
    Inventory = require('./inventory.jsx'),
    Location = require('./location.jsx');
    
module.exports = React.createClass({
    handleDragOver: function (e) {
        e.preventDefault();
        //console.warn('dragging over valid drag target');
    },
    render: function () {
        return <div onDragOver={ this.handleDragOver } className="game">
            <h2>Hello this is drag and drop game prototype!</h2>
            <Location />
            <Console /> 
            <Inventory />
        </div>;
    }
});