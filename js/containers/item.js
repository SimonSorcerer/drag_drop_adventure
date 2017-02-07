import { connect }   from 'react-redux';
import { getItem }   from '../managers/item';
import actions       from '../actions/item'
import ItemComponent from '../components/item.jsx';

const mapStateToProps = (state, ownProps) => {
    const item = getItem(ownProps.id);

    return {
        draggedOver: state.drag.draggedOverItem === ownProps.id,
        isOverItself: state.drag.draggedOverItem === state.drag.draggedItem === ownProps.id,
        canBePicked: item.canBePicked,
        label: item.label
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const item = getItem(ownProps.id);

    return {
        handleDragStart: (e) => {
            dispatch(actions.startDragging(ownProps.id));
        },
        handleDragEnd: (e) => {
            dispatch(actions.stopDragging());
        },
        handleDragEnter: (e) => {
            dispatch(actions.startDragOver(ownProps.id));
            e.stopPropagation();
        },
        handleDragLeave: (e) => {
            dispatch(actions.stopDragOver());
            e.stopPropagation();
        },
        handleDrop: (e) => {
            dispatch(actions.stopDragOver());
        },
        handleMouseEnter: (e) => {
            dispatch(actions.startHover(ownProps.id));
        },
        handleMouseLeave: (e) => {
            dispatch(actions.stopHover());
        },
        handleClick: (e) => {
            dispatch(actions.examine(item.description))
        }
    }
}

const Item = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemComponent)

export default Item
