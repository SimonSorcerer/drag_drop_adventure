export const startDragOver = (id) => {
    return {
        type: 'START_DRAGGING_OVER',
        id
    }
}

export const stopDragOver = () => {
    return {
        type: 'STOP_DRAGGING_OVER'
    }
}

export const dropItem = (id) => {
    return {
        type: 'DROP_ITEM',
        id
    }
}

export default {
    startDragOver,
    stopDragOver,
    dropItem
}
