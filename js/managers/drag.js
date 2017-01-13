import { publish, eventTypes } from './bus';
import { getItem } from './item';

export const dragged = createIdHolder();
export const draggedOver = createIdHolder();
export const inventory = {
    isOver: false,
    enter: function() {
        this.isOver = true;
        signalConsole();
    },
    leave: function() {
        this.isOver = false;
        signalConsole();
    }
};

function signalConsole() {
    var overInventory = inventory.isOver,
        draggingItem = dragged.id,
        overItem = draggedOver.id;

    if (draggingItem && overItem && draggingItem !== overItem) {
        publish(eventTypes.console, 'Use ' + getItem(draggingItem).label + ' with ' + getItem(overItem).label);
    }
    if (draggingItem && !overItem && overInventory) {
        publish(eventTypes.console, 'Pick up ' + getItem(draggingItem).label);
    }
    if (draggingItem && !overItem && !overInventory) {
        publish(eventTypes.console, 'Use ' + getItem(draggingItem).label + ' with ...');
    }
    if (!draggingItem) {
        publish(eventTypes.console, '');
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
