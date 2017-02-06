export const startDragging = (id) => {
    return {
        type: 'START_DRAGGING_ITEM',
        id
    }
}

export const stopDraggingItem = () => {
    return {
        type: 'STOP_DRAGGING_ITEM'
    }
}

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

export const startHoverOn = (label) => {
    return {
        type: 'START_HOVER',
        label
    }
}

export const stopHover = () => {
    return {
        type: 'STOP_HOVER'
    }
}

export const examine = (item) => {
    return {
        type: 'EXAMINE_ITEM',
        item
    }
}

export default {
    startDragging,
    stopDragging,
    startDragOver,
    stopDragOver,
    startHover,
    stopHover,
    examine
}
