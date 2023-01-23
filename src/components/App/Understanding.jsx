import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

function Understanding () {
//feeling, support, and undertanding page set up same beside value names.
    const [understanding, setUnderstandingNumber] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstandingNumber = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_UNDERSTANDING_NUMBER',
            payload: understanding
        })
        history.push('/Support')
    };

    return (
        <>
        <h2>How well are you understanding the content?</h2>
        <p>1 = Not well at all <br>
        </br> 5 = Extreamly well</p>
        <form onSubmit={handleUnderstandingNumber}>
        <input
        type="number"
        min="1"
        max="5"
        id="number-box"
        value={understanding}
        onChange={(event) => setUnderstandingNumber(event.target.value)}
        required/>
        <button>NEXT</button>
        </form>
        </>
    )
};

export default Understanding;