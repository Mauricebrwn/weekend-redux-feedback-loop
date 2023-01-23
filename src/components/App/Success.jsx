import { useHistory } from "react-router-dom";

function SuccessPage() {

    const history = useHistory();
//success page so on click you are brought back to the beginning page
    const handleLeaveNewFeedback = (event) => {
        event.preventDefault();
        history.push('/')
    }

    return(
        <>
        <h2>Thank you!</h2>
        <button onClick={handleLeaveNewFeedback}>Leave new feedback</button>
        </>
    )
};

export default SuccessPage;

