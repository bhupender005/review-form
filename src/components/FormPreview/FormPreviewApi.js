import { getData, deleteData } from '../../utilities/Api';

const getFormData = () => {
    return getData();
}

const resetForm = () => deleteData();

export {
    getFormData,
    resetForm,
}