import { connect }      from 'react-redux';
import ConsoleComponent from '../components/console.jsx';
import { getItem }      from '../managers/item';

const getConsoleMessage = () => {
    var overInventory = state.inventory.draggedOver,
        draggingItem = state.drag.dragged.id,
        overItem = state.drag.draggedOver.id;

    if (draggingItem && overItem && draggingItem !== overItem) {
        return 'Use ' + getItem(draggingItem).label + ' with ' + getItem(overItem).label;
    }
    if (draggingItem && !overItem && overInventory) {
        return 'Pick up ' + getItem(draggingItem).label;
    }
    if (draggingItem && !overItem && !overInventory) {
        return 'Use ' + getItem(draggingItem).label + ' with ...';
    }

    return '';
}

const mapStateToProps = (state, ownProps) => {
    return {
        message: getConsoleMessage()
    }
}

const Console = connect(
    mapStateToProps
)(ConsoleComponent)

export default Console
