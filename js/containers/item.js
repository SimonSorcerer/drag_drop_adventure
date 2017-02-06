import { connect }   from 'react-redux';
import { getItem }   from '../managers/item';
import actions       from '../actions/item'
import ItemComponent from '../components/item';

const mapStateToProps = (state, ownProps) => {
    return {
        draggedOver: state.draggedOverItem === this.ownProps.id,
        isOverItself: state.draggedOverItem === state.draggedItem === this.ownProps.id,
        canBePicked: this.ownProps.item.canBePicked
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleDragStart: (e) => {
            dispatch(actions.startDragging(this.ownProps.id));
        },
        handleDragEnd: (e) => {
            dispatch(actions.stopDragging());
        },
        handleDragEnter: (e) => {
            dispatch(actions.startDragOver(this.ownProps.id));
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
            dispatch(actions.startHover(this.ownProps.id));
        },
        handleMouseLeave: (e) => {
            dispatch(actions.stopHover());
        },
        handleClick: (e) => {
            dispatch(actions.examine(this.ownProps.id))
        }
    }
}

const Item = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemComponent);
