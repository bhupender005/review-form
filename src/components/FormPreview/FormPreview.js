import React from 'react'
import { getFormData, resetForm } from './FormPreviewApi';
import { fields } from '../../constants/fields';
import CustomFields from '../CustomField';

const fieldsToMerge = getFormData();

const formatedFields = fields.map(obj => {
    const {fieldName:key, fieldType:type } = obj;
    // const type = obj
    return {...obj, fieldValue:fieldsToMerge[key], fieldType: `preview-${type}`};
});

function FormPreview({forceUpdate}) {
    return (
        <div className="Form-Preview">
            <h2>Form Preview</h2>
            <button onClick={() => {
                resetForm();
                forceUpdate(); //force parent component to reload
            }}>Reset Form</button>
            {
                formatedFields.map((fieldProps, i) => <CustomFields key={i} {...fieldProps} />)
            }
        </div>
    )
}

export default FormPreview
