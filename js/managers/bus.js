var subscriptions = {};

function register(event, callback) {
    if (!subscriptions[event]) {
        subscriptions[event] = [];
    }
    
    if (callback) {
        subscriptions[event].push(callback);
    }
}

function unregister(event, callback) {
    if (!subscriptions[event]) {
        return;
    }
    
    subscriptions[event].remove(callback);
}

function publish(event, payload) {
    if (!subscriptions[event]) {
        return;
    }
    
    subscriptions[event].forEach(function (callback) {
        callback(payload);
    });
}


module.exports = {
    register: register,
    unregister: unregister,
    publish: publish,
    types: {
        console: 'console'
    }
};