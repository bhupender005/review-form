import { saveDataForSingle, getDataFor } from '../../utilities/Api';

const saveComment = (key, comment) => {
    saveDataForSingle(key, comment);
}

const getComment = (commentId) => {
    return getDataFor(commentId);
}

export {
    saveComment,
    getComment,
}