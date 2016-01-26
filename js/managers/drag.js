var eventBus = require('./bus'),
    itemManager = require('./item'),
    manager;
    
function signalConsole() {
    var overInventory = manager.inventory.isOver,
        draggingItem = manager.dragged.id,
        overItem = manager.draggedOver.id;
        
    if (draggingItem && overItem && draggingItem !== overItem) {
        eventBus.publish(eventBus.types.console, 'Use ' + itemManager.get(draggingItem).label + ' with ' + itemManager.get(overItem).label);
    } 
    if (draggingItem && !overItem && overInventory) {
        eventBus.publish(eventBus.types.console, 'Pick up ' + itemManager.get(draggingItem).label);
    }
    if (draggingItem && !overItem && !overInventory) {
        eventBus.publish(eventBus.types.console, 'Use ' + itemManager.get(draggingItem).label + ' with ...');
    }
    if (!draggingItem) {
        eventBus.publish(eventBus.types.console, '');
    }
}

function createIdHolder() {
    return {
        id: null,
        set: function(id) {
            this.id = id;
            signalConsole();
        },
        clear: function() {
            this.id = null;
            signalConsole();
        }
    }
}

manager = {
    dragged: createIdHolder(),
    draggedOver: createIdHolder(),
    inventory: {
        isOver: false,
        enter: function() {
            this.isOver = true;
            signalConsole();
        },
        leave: function() {
            this.isOver = false;
            signalConsole();
        }
    }
};

module.exports = manager; 