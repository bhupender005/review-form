import { SAVE_FORM, SAVE_COMMENT, RESET_FORM } from "../constants/types"
import { saveFormData } from "../components/ReviewForm/ReviewFormApi"
import { resetFormData } from "../components/FormPreview/FormPreviewApi"

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

export const saveFormAction = (data) => {
    return (dispatch) => {
        saveFormData(data);
        dispatch(saveForm(data));
    }
}

export const resetFormAction = () => {
    return (dispatch) => {
        resetFormData();
        dispatch(resetForm());
    }
}