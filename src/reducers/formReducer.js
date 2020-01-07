import { SAVE_FORM, SAVE_COMMENT, RESET_FORM } from "../constants/types";
import { getFormData } from "../components/ReviewForm/ReviewFormApi";

const intialState = {};

export const formReducer = (state = {...intialState, ...getFormData()}, action) => {
    const { type, payload } = action;
    switch(type) {
        case SAVE_FORM:
        case SAVE_COMMENT:
            return {
                ...state,
                ...payload,
            }
        
        case RESET_FORM:
            return intialState;
        
        default:
            return state;
    }
}