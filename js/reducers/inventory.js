const defaultState = {
    items: new Set(['passport']),
    isDraggedOver: false
}

const inventoryReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'START_DRAGGING_OVER':
            return {
                ...state,
                isDraggedOver: true
            }
        case 'STOP_DRAGGING_OVER':
            return {
                ...state,
                isDraggedOver: false
            }
        case 'DROP_ITEM':
            return {
                ...state,
                items: items.add(action.id),
                isDraggedOver: false
            }
        default:
            return state
    }
}

export default inventoryReducers
