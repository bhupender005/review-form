const saveData = (data) => {
    data.forEach(({key, value}) => {
        localStorage.setItem(key, value);
    });
}

const getData = () => {
    const items = {...localStorage};
    return items;
}

export {
    saveData,
    getData,
}