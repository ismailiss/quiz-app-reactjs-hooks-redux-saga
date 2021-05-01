


import { COUNT_UP } from './actionsType'

const initialState = {
    count: 0
}
const reducerCount = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_UP: {
            return {
                ...state, count: state.count + 1
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
export default reducerCount;