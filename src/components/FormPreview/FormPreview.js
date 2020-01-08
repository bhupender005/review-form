import React from 'react'
import { fields } from '../../constants/fields';
import CustomFields from '../CustomField';
import { resetFormAction } from '../../actions/formActions';
import { useSelector, connect } from 'react-redux';

function FormPreview({forceUpdate, ...props}) {
    const fieldsToMerge = useSelector(state => state);

    const formatedFields = fields.map(obj => {
        const {fieldName:key, fieldType:type } = obj;
        return {...obj, fieldValue:fieldsToMerge[key], fieldType: `preview-${type}`};
    });

    return (
        <div className="Form-Preview">
            <h2>Form Preview</h2>
            <button onClick={() => {
                props.resetFormAction();
                forceUpdate(); //force parent component to reload
            }}>Reset Form</button>
            {
                formatedFields.map((fieldProps, i) => <CustomFields key={i} {...fieldProps} />)
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetFormAction: () => dispatch(resetFormAction())
    }
}

export default connect(null, mapDispatchToProps)(FormPreview)
