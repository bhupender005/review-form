import React from 'react'

function CustomField(props) {
    const { labelName, fieldName, fieldValue, handleChange, ...fieldProps } = props;
    return (
        <div className="Field-Row">
            <label>{labelName}: </label>
            <input type="text" name={fieldName} value={fieldValue} onChange={(e) => handleChange(e.target.value)} {...fieldProps} />
        </div>
    )
}

export default CustomField
