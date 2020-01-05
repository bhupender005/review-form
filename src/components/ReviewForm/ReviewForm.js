import React, { useState } from 'react'
import CustomField from '../CustomField';
import { saveFormData } from './ReviewFormApi';

function ReviewForm() {
    const [ villaName, setVillaName ] = useState('');
    const [ dateOfVisit, setDateOfVisit ] = useState('');
    const [ pincode, setPincode ] = useState('');
    const [ ownerName, setOwnerName ] = useState('');
    const [ noteAboutSurrounding, setNoteAboutSurrounding ] = useState('');
    const [ noteAboutConstruction, setNoteAboutConstruction ] = useState('');
    const [ noteAboutDecor, setNoteAboutDecor ] = useState('');

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
        saveFormData(formData);
        alert("Form Submitted Successfully");
    }

    const fields = [
        { labelName:"Name of the villa", fieldName:"villaName", fieldValue:villaName, handleChange:setVillaName, validation:"required" },
        { labelName:"Date of visit", fieldName:"dateOfVisit", fieldValue:dateOfVisit, handleChange:setDateOfVisit, validation:"required" },
        { labelName:"Pincode", fieldName:"pincode", fieldValue:pincode, handleChange:setPincode, validation:"required" },
        { labelName:"Owner's name", fieldName:"ownerName", fieldValue:ownerName, handleChange:setOwnerName },
        { labelName:"A note about the surrounding area of the villa", fieldName:"noteAboutSurrounding", fieldValue:noteAboutSurrounding, handleChange:setNoteAboutSurrounding, validation:"required" },
        { labelName:"A note about the construction quality of the villa", fieldName:"noteAboutConstruction", fieldValue:noteAboutConstruction, handleChange:setNoteAboutConstruction, validation:"required" },
        { labelName:"A note about the villa decor", fieldName:"noteAboutDecor", fieldValue:noteAboutDecor, handleChange:setNoteAboutDecor, validation:"required" },
    ]
  
    return (
        <div className="Review-Form">
            <h2>Review your recent visit in Villa</h2>
            <form onSubmit={e => onSubmit(e)}>
                {
                    fields.map((fieldProps, i) => <CustomField key={i} {...fieldProps} />)
                }
                <button type="submit" name="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReviewForm
