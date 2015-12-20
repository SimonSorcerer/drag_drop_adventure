var React = require('react');

module.exports = React.createClass({
    render: function () {
        var className = this.props.canPick ? 'item pickable' : 'item';
        
        return <span className={className} draggable={ this.props.canPick ? true : false }>{ this.props.label }</span>;
    }
});