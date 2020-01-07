import { SAVE_FORM, SAVE_COMMENT, RESET_FORM } from "../constants/types"

export const saveForm = (data) => {
    return {
        type: SAVE_FORM,
        payload: data,
    }
}

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment,
    }
}

export const resetForm = () => {
    return {
        type: RESET_FORM,
    }
}