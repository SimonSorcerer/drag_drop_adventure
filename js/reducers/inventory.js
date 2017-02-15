export default (state, action) => {
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
            if (subState.isDraggedOver) {
                return {
                    ...subState,
                    items: subState.items.add(action.id),
                    isDraggedOver: false
                }
            }
            return subState
        default:
            return subState
    }
}
