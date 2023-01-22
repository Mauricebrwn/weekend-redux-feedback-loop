import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

function Support () {

    const [support, setSupportNumber] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupportNumber = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SET_SUPPORT_NUMBER',
            payload: support
        })
        history.push('/Comment')
    };

    return (
        <>
        <h2>How well are you being supported?</h2>
        <p>1 = Not well at all <br>
        </br> 5 = Extreamly well</p>
        <form onSubmit={handleSupportNumber}>
        <input
        type="number"
        min="1"
        max="5"
        id="number-box"
        value={support}
        onChange={(event) => setSupportNumber(event.target.value)}
        required/>
        <button>NEXT</button>
        </form>
        </>
    )
};

export default Support;