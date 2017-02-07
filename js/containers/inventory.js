import { connect }        from 'react-redux';
import actions            from '../actions/inventory'
import InventoryComponent from '../components/inventory.jsx';
import { getItem }        from '../managers/item'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.inventory.items,
        draggedOver: state.inventory.draggedOver
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
        handleDrop: (itemId) => {
            dispatch(actions.dropItem(itemId));
        }
    }
}

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryComponent)

export default Inventory
