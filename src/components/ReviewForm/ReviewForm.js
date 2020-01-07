import React, { useState } from 'react'
import CustomField from '../CustomField';
import { saveFormData } from './ReviewFormApi';
import { fields } from '../../constants/fields';
import { validate } from '../../utilities/Validations';
import { useDispatch } from 'react-redux';
import { saveForm } from '../../actions/formActions';

function ReviewForm({forceUpdate}) {
    const [ villaName, setVillaName ] = useState('');
    const [ dateOfVisit, setDateOfVisit ] = useState('');
    const [ pincode, setPincode ] = useState('');
    const [ ownerName, setOwnerName ] = useState('');
    const [ noteAboutSurrounding, setNoteAboutSurrounding ] = useState('');
    const [ noteAboutConstruction, setNoteAboutConstruction ] = useState('');
    const [ noteAboutDecor, setNoteAboutDecor ] = useState('');

    // const tempState = useSelector(state => state.name);

    const onSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            villaName,
            dateOfVisit,
            pincode,
            ownerName,
            noteAboutSurrounding,
            noteAboutConstruction,
            noteAboutDecor,
        }
        dispatch(saveForm(formData));
        
        const response = validate(formatedFields);

        if(response) {
            alert(response);
        } else {
            saveFormData(formData);
            alert("Form Submitted Successfully");
            forceUpdate(); //force parent component to reload
        }
    }

    const fieldsToMerge = [
        { fieldName:"villaName", fieldValue:villaName, handleChange:setVillaName, validation:"required" },
        { fieldName:"dateOfVisit", fieldValue:dateOfVisit, handleChange:setDateOfVisit, validation:"required" },
        { fieldName:"pincode", fieldValue:pincode, handleChange:setPincode, validation:"required" },
        { fieldName:"ownerName", fieldValue:ownerName, handleChange:setOwnerName },
        { fieldName:"noteAboutSurrounding", fieldValue:noteAboutSurrounding, handleChange:setNoteAboutSurrounding, validation:"required" },
        { fieldName:"noteAboutConstruction", fieldValue:noteAboutConstruction, handleChange:setNoteAboutConstruction, validation:"required" },
        { fieldName:"noteAboutDecor", fieldValue:noteAboutDecor, handleChange:setNoteAboutDecor, validation:"required" },
    ];
  
    const formatedFields = fields.map(obj => {
        const objToMerge = fieldsToMerge.find(o => o.fieldName === obj.fieldName);
        return {...obj, ...objToMerge};
    });

    const dispatch = useDispatch();

    return (
        <div className="Review-Form">
            <h2>Review your recent visit in Villa</h2>
            <form onSubmit={e => onSubmit(e)}>
                {
                    formatedFields.map((fieldProps, i) => <CustomField key={i} {...fieldProps} />)
                }
                <button className="submitButton" type="submit" name="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm
