export const doIncrementCounter = (step) => {
    return {
        type: 'counter/increment',
        payload: step
    }
}

export const doDecrementCounter = (step) => {
    return {
        type: 'counter/decrement',
        payload: step
    }
}