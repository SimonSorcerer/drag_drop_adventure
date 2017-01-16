var subscriptions = {};

export function register(event, callback) {
    if (!subscriptions[event]) {
        subscriptions[event] = [];
    }

    if (callback) {
        subscriptions[event].push(callback);
    }
}

export function unregister(event, callback) {
    if (!subscriptions[event]) {
        return;
    }

    subscriptions[event].remove(callback);
}

export function publish(event, payload) {
    if (!subscriptions[event]) {
        return;
    }

    subscriptions[event].forEach(function (callback) {
        callback(payload);
    });
}

export const eventTypes = {
    console: 'console',
    description: 'description'
}
