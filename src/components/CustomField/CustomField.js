import React from 'react';
import StructuredNote from './StructuredNote';

const isRequired = (validation = '') => validation.includes('required');

function CustomField(props) {
    const { labelName, validation, ...rest } = props;
    return (
        <div className="Field-Row">
            <label>{labelName} {isRequired(validation) && <span className="Required-Mark">(*)</span>}: </label>
            <Field  validation={validation} {...rest} />
        </div>
    )
}

const formatFieldProps = (props) => {
    const { fieldName, fieldValue, ...rest } = props;
    
    return {
        name: fieldName,
        value: fieldValue,
        ...rest, 
    };
}

function Field(props) {
    const { handleChange, fieldType, validation, ...rest } = props;
    const fieldProps = formatFieldProps(rest)
    // return <input type="text" name={fieldName} value={fieldValue} onChange={(e) => handleChange(e.target.value)} {...fieldProps} />

    switch(fieldType){
        case 'text':
            return <input type="text" onChange={(e) => handleChange(e.target.value)} {...fieldProps} />

        case 'note':
            return <textarea {...fieldProps} onChange={(e) => handleChange(e.target.value)} />
        
        case 'preview-note':
            return <StructuredNote {...rest} />

        default:
        case 'preview': 
            return <span>{fieldProps.value}</span>
    }

}

export default CustomField
