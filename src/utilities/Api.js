const saveData = (data) => {
    data.forEach(({key, value}) => {
        saveDataForSingle(key, value);
    });
}

const saveDataForSingle = (key, value) => {
    localStorage.setItem(key, value);
};

const getData = () => {
    const items = {...localStorage};
    return items;
}

const getDataFor = (key) => localStorage.getItem(key);

const deleteData = () => localStorage.clear();

export {
    saveData,
    getData,
    getDataFor,
    saveDataForSingle,
    deleteData,
}