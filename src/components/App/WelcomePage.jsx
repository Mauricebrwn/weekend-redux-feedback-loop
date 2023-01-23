import { useHistory } from "react-router-dom";

function WelcomePage() {
    const history = useHistory();
//first page with start button to bring to the feelings page 
    return (
    <div>
        <h1>Welcome to the home page</h1>
        <p>To begin feedback please press the START button</p>
        <button onClick={()=> history.push('/Feeling')}>START</button>
    </div>
    );
}
export default WelcomePage;