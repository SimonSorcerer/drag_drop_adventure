import { createSelector } from 'reselect'
import { getItem } from '../managers/item'
import { useWith, pickUp, lookAt } from '../helpers/transcription'

const getDraggingOverInventory = (state) => state.inventory.isDraggedOver
const getDraggedItem = (state) => state.drag.draggedItem
const getDraggedOverItem = (state) => state.drag.draggedOverItem
const getHoveredItem = (state) => state.game.hoveredItem

export const getConsoleMessage = createSelector(
    [ getDraggingOverInventory, getDraggedItem, getDraggedOverItem, getHoveredItem ],
    (isDraggingOverInventory, draggedItem, draggedOverItem, hoveredItem) => {
        if (draggedItem && draggedOverItem && draggedItem !== draggedOverItem) {
            return useWith(getItem(draggedItem).label, getItem(draggedOverItem).label)
        }
        if (draggedItem && !draggedOverItem && isDraggingOverInventory) {
            return pickUp(getItem(draggedItem).label)
        }
        if (draggedItem && !draggedOverItem && !isDraggingOverInventory) {
            return useWith(getItem(draggedItem).label)
        }
        if (hoveredItem && !draggedItem) {
            return lookAt(getItem(hoveredItem).label)
        }
        return '';
    }
)
