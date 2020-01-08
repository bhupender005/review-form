import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { saveCommentAction } from '../../actions/formActions';

function StructuredNote(props) {
    const { fieldValue, fieldName } = props;
    const [comment, setComment] = useState('')
    const commentId = `comment-${fieldName}`;
    const savedComment = useSelector(state => state[commentId])

    return (
        <span>
            {fieldValue} <br/>
            {
                savedComment ? (<strong>Saved comment: {savedComment}</strong>) : (
                    <div>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} /> 
                        <button onClick={() => props.saveCommentAction(commentId, comment)}>Add Comment</button>
                    </div>
                )
            }
        </span>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveCommentAction: (id, comment) => dispatch(saveCommentAction(id, comment))
    }
}

export default connect(null, mapDispatchToProps)(StructuredNote)
