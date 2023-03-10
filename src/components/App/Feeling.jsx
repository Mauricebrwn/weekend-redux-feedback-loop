import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

function Feeling () {
//dispatch needed for type and payload
    const [feeling, setFeelingNumber] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelingNumber = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_FEELING_NUMBER',
            payload: feeling
        })
        history.push('/Understanding')
    };
//the return form with number input and on submit runs the handle const
    return (
        <>
        <h2>How are you feeling today?</h2>
        <p>1 = Not well at all </p>
        <p> 5 = Extreamly well</p>
        <form onSubmit={handleFeelingNumber}>
        <input
        type="number"
        min="1"
        max="5"
        id="number-box"
        value={feeling}
        onChange={(event) => setFeelingNumber(event.target.value)}
        required/>
        <button>NEXT</button>
        </form>
        </>
    )
};

export default Feeling;