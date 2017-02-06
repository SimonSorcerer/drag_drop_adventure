import { connect }        from 'react-redux';
import actions            from '../actions/inventory'
import InventoryComponent from './inventory';


const mapStateToProps = (state, ownProps) => {
    items: ['passport'],
    draggedOver: state.inventory.draggedOver
}

const mapDispatchToProps = (dispatch, ownProps) => {
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

const Inventory = connect(
    mapStateToProps,
    mapDispatchToProps
)(InventoryComponent);
