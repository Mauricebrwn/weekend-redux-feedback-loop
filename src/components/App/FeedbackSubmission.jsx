// import { useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
//grabs values from the redux store
function SubmitFeedback() {
    const history = useHistory();
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    const handleSubmitFeedback = event => {
        event.preventDefault();
        
    //post route that takes all of the ratings and puts into the databse on button click
    axios({
        method: 'POST',
        url:'/prime_feedback',
        data:{
            feeling,
            understanding,
            support,
            comments,
        }
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log('Feedback POST failed', error)
    })
    history.push('/Success')

    };
//grabs values for review before final submit into the database
    return (
        <>
        <h2>Review your feedback</h2>
            <p>Feeling:{feeling}</p>
            <p>Understanding:{understanding}</p>
            <p>Support:{support}</p>
            <p>Commments:{comments}</p>

        <button className="start" onClick={handleSubmitFeedback}>SUBMIT FEEDBACK</button>
        </>
    )
};

export default SubmitFeedback;