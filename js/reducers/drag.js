export default (state, action) => {
    const subState = state.drag;

    switch (action.type) {
        case 'START_DRAGGING_ITEM':
            return {
                ...subState,
                draggedItem: action.id
            }
        case 'STOP_DRAGGING_ITEM':
            return {
                ...subState,
                draggedItem: null
            }
        case 'START_DRAGGING_OVER_ITEM':
            return {
                ...subState,
                draggedOverItem: action.id
            }
        case 'STOP_DRAGGING_OVER_ITEM':
            return {
                ...subState,
                draggedOverItem: null
            }
        default:
            return subState
    }
}
