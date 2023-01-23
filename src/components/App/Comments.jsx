import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

function Comment () {

    const [comment, setComments] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleComments = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_COMMENTS',
            payload: comment
        })
        history.push('/Feedback')
    };
//return diffrent just text used for comments
    return (
        <>
        <h2>Any comments you want to leave?</h2>
        <form onSubmit={handleComments}>
        <input className="comment"
        type="text"
        value={comment}
        onChange={(event) => setComments(event.target.value)}
        required/>
        <button>NEXT</button>
        </form>
        </>
    )
};

export default Comment;