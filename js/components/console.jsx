var React = require('react'),
    eventBus = require('../managers/bus');
    
module.exports = React.createClass({
    registerToBus: function () {
        eventBus.register(eventBus.types.console, this.write);
    },
    getInitialState: function () {
        this.registerToBus();
        
        return {
            message: ''
        }
    },
    write: function (message) {
        this.setState({ message: message });
    },
    clear: function () {
        this.setState({ message: '' })
    },
    render: function () {
        return <div className='box console'>
            { this.state.message }
        </div>;
    }
});