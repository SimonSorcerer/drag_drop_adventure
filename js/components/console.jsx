var React = require('react'),
    EventBus = require('../managers/bus');
    
module.exports = React.createClass({
    registerToBus: function () {
        var eventBus = EventBus.build();
        
        eventBus.register(EventBus.types.console, this.write);
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