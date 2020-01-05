const validate = (fields) => {
    const response = fields.map(({labelName, validation, fieldValue}) => {
        let fieldRespone = {
            isValid: true,
            errorMessage: '',
        };
        
        if(validation === 'required' && isEmpty(fieldValue)) {
            fieldRespone = {
                isValid: false,
                errorMessage: `'${labelName}' is required.`
            }
        }
        
        return fieldRespone;
    });

    if(response.some(row => row.isValid === false)) {
        return errorMessages(response);
    } else {
        return ""
    }

    // return response;
}

const errorMessages = (response) => {
    return response
        .filter(row => (row.errorMessage !== ''))
        .map(row => row.errorMessage)
        .join('\n');
}

const isEmpty = (value) => (!value.trim())

export {
    validate,
}