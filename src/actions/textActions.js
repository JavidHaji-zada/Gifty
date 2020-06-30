import { TEXT, COLOR } from './types';

export const setText = (text) => dispatch => {
    return dispatch({ type: TEXT, payload: text })
}

export const setColor = (color) => dispatch => {
    return dispatch({ type: COLOR, payload: color })
}