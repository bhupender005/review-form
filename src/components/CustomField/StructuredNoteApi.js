import { saveDataForSingle, getDataFor } from '../../utilities/Api';

const saveCommentToStorage = (key, comment) => {
    saveDataForSingle(key, comment);
}

const getCommentFromStorage = (commentId) => {
    return getDataFor(commentId);
}

export {
    saveCommentToStorage,
    getCommentFromStorage,
}