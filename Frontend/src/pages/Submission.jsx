import Confirm from "../Components/Confirm";
import Instruction from "../Components/Instruction";
import Stopwatch from "../Components/Stopwatch";
import CreateFile from "../Components/CreateFile";
import Emoji from '../Assets/Emoji.png';
import './Submission.css';

const Submission=() =>{
    return(
        <div className="submission">
            <img src={Emoji}  className="emoji" height={50} width={50}/>
            
            <p className="stext">Sorry! You don't have ay Submission yet.</p>
        </div>
    )

}

export default Submission;