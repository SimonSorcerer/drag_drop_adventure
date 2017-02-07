import { connect }      from 'react-redux';
import ConsoleComponent from '../components/console.jsx';
import { getItem }      from '../managers/item';

const getConsoleMessage = (state) => {
    var overInventory = state.inventory.isDraggedOver,
        draggingItem = state.drag.draggedItem,
        overItem = state.drag.draggedOverItem,
        hoveredItem = state.game.hoveredItem;

    if (draggingItem && overItem && draggingItem !== overItem) {
        return 'Use ' + getItem(draggingItem).label + ' with ' + getItem(overItem).label;
    }
    if (draggingItem && !overItem && overInventory) {
        return 'Pick up ' + getItem(draggingItem).label;
    }
    if (draggingItem && !overItem && !overInventory) {
        return 'Use ' + getItem(draggingItem).label + ' with ...';
    }
    if (hoveredItem && !draggingItem) {
        return 'Look at ' + getItem(hoveredItem).label;
    }
    return '';
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: getConsoleMessage(state)
    }
}

const Console = connect(
    mapStateToProps
)(ConsoleComponent)

export default Console
