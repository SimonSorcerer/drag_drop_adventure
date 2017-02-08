export const startDragging = (id) => {
    return {
        type: 'START_DRAGGING_ITEM',
        id
    }
}

export const stopDragging = () => {
    return {
        type: 'STOP_DRAGGING_ITEM'
    }
}

export const startDragOver = (id) => {
    return {
        type: 'START_DRAGGING_OVER_ITEM',
        id
    }
}

export const stopDragOver = () => {
    return {
        type: 'STOP_DRAGGING_OVER_ITEM'
    }
}

export const startHover = (id) => {
    return {
        type: 'START_HOVER',
        id
    }
}

export const stopHover = () => {
    return {
        type: 'STOP_HOVER'
    }
}

export const examine = (label, description) => {
    return {
        type: 'EXAMINE_ITEM',
        label,
        description
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
