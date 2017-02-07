import { connect }        from 'react-redux';
import actions            from '../actions/inventory'
import InventoryComponent from '../components/inventory.jsx';
import { getItem }        from '../managers/item'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.inventory.items,
        draggedOver: state.inventory.isDraggedOver,
        draggedItem: state.drag.draggedItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDragEnter: () => {
            dispatch(actions.startDragOver());
        },
        handleDragLeave: () => {
            dispatch(actions.stopDragOver());
        },
        handleDrop: (id) => {
            dispatch(actions.dropItem(id));
        }
    }
}

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryComponent)

export default Inventory
