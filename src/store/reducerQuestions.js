
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILED } from './actionsType'

const initialState = {
    data: [],
    isLoading: true
}
const reducerQuestions = (state = initialState, action) => {

    console.log(action);
    switch (action.type) {
        case GET_DATA_SUCCESS: {
            return {
                ...state, data: action.data, isLoading: false
            }
        }
        case GET_DATA_FAILED: {
            return {
                ...state, data: []
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
export default reducerQuestions;