import React from 'react'

const isRequired = (validation = '') => validation.includes('required');

function CustomField(props) {
    const { labelName, fieldName, fieldValue, handleChange, validation, ...fieldProps } = props;
    return (
        <div className="Field-Row">
            <label>{labelName} {isRequired(validation) && <span className="Required-Mark">(*)</span>}: </label>
            <input type="text" name={fieldName} value={fieldValue} onChange={(e) => handleChange(e.target.value)} {...fieldProps} />
        </div>
    )
}

export default CustomField
