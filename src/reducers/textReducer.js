import { TEXT, COLOR } from '../actions/types';
const INITIAL_STATE = {
    text: '',
    color: ''
}

export const textReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TEXT: {

            return { ...state, text: action.payload }
        }
        case COLOR: {
            return { ...state, color: action.payload }
        }
        default:
            return state
    }
}