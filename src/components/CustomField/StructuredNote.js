import React, { useState } from 'react';
import { saveComment, getComment } from './StructuredNoteApi';

function StructuredNote(props) {
    const { fieldValue, fieldName } = props;
    const [comment, setComment] = useState('')
    const commentId = `comment-${fieldName}`;
    const savedComment = getComment(commentId);

    return (
        <span>
            {fieldValue} <br/>
            {
                savedComment ? (<strong>Saved comment: {savedComment}</strong>) : (
                    <div>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} /> 
                        <button onClick={() => saveComment(commentId, comment)}>Add Comment</button>
                    </div>
                )
            }
        </span>
    )
}

export default StructuredNote
