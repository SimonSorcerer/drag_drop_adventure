export const useWith = (label1, label2) => {
    if (label1 && label2) {
        return 'Use ' + label1 + ' with ' + label2
    } else if (label1) {
        return 'Use ' + label1 + ' with ...'
    }
    return 'You probably want to use something, but I am not sure what :('
}

export const pickUp = (label) => {
    return 'Pick up ' + label;
}

export const lookAt = (label) => {
    return 'Look at ' + label;
}
