import { getData, deleteData } from '../../utilities/Api';

const getFormData = () => {
    return getData();
}

const resetFormData = () => deleteData();

export {
    getFormData,
    resetFormData,
}