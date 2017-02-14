const inventoryReducers = (state, action) => {
    const subState = state.inventory

    switch (action.type) {
        case 'START_DRAGGING_OVER':
            return {
                ...subState,
                isDraggedOver: true
            }
        case 'STOP_DRAGGING_OVER':
            return {
                ...subState,
                isDraggedOver: false
            }
        case 'DROP_ITEM':
            return {
                ...subState,
                items: subState.items.add(action.id),
                isDraggedOver: false
            }
        default:
            return subState
    }
}

export default (state, action) => {
    return {
        ...state,
        inventory: inventoryReducers(state, action)
    }
}
