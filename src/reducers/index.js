const INITIAL_STATE = {
    counter: 0,
    index: 0
}

export function counterApp(state = INITIAL_STATE, action) {
    console.log(state, action)

    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1,
                index: state.index + 1
            }
        case 'DECREMENT':
            return {
                counter: state.counter - 1,
                index: state.index + 1
            }
        case 'INDEX':
            return {
                counter: state.counter,
                index: state.index + 1
            }
        default:
            return state

    }
}