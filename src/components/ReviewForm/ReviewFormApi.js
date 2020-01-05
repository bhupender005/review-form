import { saveData, getData } from '../../utilities/Api';

const saveFormData = (data) => {
    const formatedData = Object.keys(data).map(key => ({key, value: data[key]}))
    saveData(formatedData);
}

const getFormData = () => {
    return getData();
}

export {
    saveFormData,
    getFormData,
}