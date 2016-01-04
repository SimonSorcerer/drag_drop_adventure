var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {
            items: []
        };
    },
    handleDrop: function (e) {
        console.error('dropped on inventory');
    },
    render: function () {
        return <div onDrop={ this.handleDrop } className="box inventory">
            <h2>Your inventory:</h2>
            <div className="items">[nothing]</div>
        </div>;
    }
});