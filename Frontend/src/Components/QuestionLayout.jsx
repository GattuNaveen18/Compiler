import './QuestionLayout.css'
import { useNavigate } from 'react-router-dom';

const QuestionLayout =() =>{

    const navigate = useNavigate(); 

    const onSolve = () => {
        navigate('/editor');
    };

    return(
        <div className='question-layout'>
            <h3 className='question-name'> Largest three Numbers</h3>
            <button onClick={onSolve} className='sbtn'>Solve</button>

        </div>
    )

}

export default QuestionLayout;