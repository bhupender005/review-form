import React from 'react'
import { getFormData } from './FormPreviewApi';

const fields = [
    { labelName:"Name of the villa", fieldName:"villaName"},
    { labelName:"Date of visit", fieldName:"dateOfVisit"},
    { labelName:"Pincode", fieldName:"pincode"},
    { labelName:"Owner's name", fieldName:"ownerName"},
    { labelName:"A note about the surrounding area of the villa", fieldName:"noteAboutSurrounding"},
    { labelName:"A note about the construction quality of the villa", fieldName:"noteAboutConstruction"},
    { labelName:"A note about the villa decor", fieldName:"noteAboutDecor"},
];

function getFieldLabel(fieldName) {
    const field = fields.find(row => row.fieldName === fieldName);
    return (field) ? field.labelName : 'Unknown';
}

function FormPreview() {
    const formData = getFormData();
    return (
        <div>
            {
                Object.keys(formData).map((key, i) => <div key={i}>{`${getFieldLabel(key)}: ${formData[key]}`}</div>)
            }
        </div>
    )
}

export default FormPreview
