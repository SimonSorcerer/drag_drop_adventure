const dragReducers = (state = {}, action) => {
    switch (action.type) {
        case 'START_DRAGGING_ITEM':
            return {
                ...state,
                draggedItem: action.id
            }
        case 'STOP_DRAGGING_ITEM':
            return {
                ...state,
                draggedItem: null
            }
        case 'START_DRAGGING_OVER':
            return {
                ...state,
                draggedOverItem: action.id
            }
        case 'STOP_DRAGGING_OVER':
            return {
                ...state,
                draggedOverItem: null
            }
        default:
            return state
    }
}

export default dragReducers
