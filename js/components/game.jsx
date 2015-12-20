var React = require('react'),
    Location = require('./location.jsx');
    
module.exports = React.createClass({
    render: function () {
        return <div className="game">
            <h2>Hello this is drag and drop game prototype!</h2> 
            <Location />
        </div>;
    }
});