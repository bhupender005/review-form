import React from 'react'
import { resetFormData } from './FormPreviewApi';
import { fields } from '../../constants/fields';
import CustomFields from '../CustomField';
import { resetForm } from '../../actions/formActions';
import { useSelector, useDispatch } from 'react-redux';

// const fieldsToMerge = getFormData();

function FormPreview({forceUpdate}) {
    const fieldsToMerge = useSelector(state => state);

    const formatedFields = fields.map(obj => {
        const {fieldName:key, fieldType:type } = obj;
        // const type = obj
        return {...obj, fieldValue:fieldsToMerge[key], fieldType: `preview-${type}`};
    });

    const dispatch = useDispatch();

    return (
        <div className="Form-Preview">
            <h2>Form Preview</h2>
            <button onClick={() => {
                resetFormData();
                dispatch(resetForm())
                forceUpdate(); //force parent component to reload
            }}>Reset Form</button>
            {
                formatedFields.map((fieldProps, i) => <CustomFields key={i} {...fieldProps} />)
            }
        </div>
    )
}

export default FormPreview
