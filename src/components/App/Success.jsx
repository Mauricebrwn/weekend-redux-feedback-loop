import { useHistory } from "react-router-dom";

function SuccessPage() {

    const history = useHistory();

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

