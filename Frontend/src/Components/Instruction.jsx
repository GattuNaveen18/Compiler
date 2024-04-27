import React from 'react';
import './Instruction.css'; 
import { useNavigate } from 'react-router-dom';

const Instruction = () => {
    const navigate = useNavigate();

    const handleStart =()=>{
        navigate('/questions');
    }

    return (
        <div className='instruction-container'>
        <div className="exam-instructions">
            <h2>Exam Instructions</h2>
            <div className="instruction">
                <h3>Time Duration:</h3>
                <p>The exam will last for 2 hours.</p>
            </div>
            <div className="instruction">
                <h3>Plagiarism:</h3>
                <p>Plagiarism is strictly prohibited. Make sure all code is your own.</p>
            </div>
            <div className="instruction">
                <h3>Languages Allowed:</h3>
                <p>You may use Python3 or C# for this exam.</p>
            </div>
            <div className="instruction">
                <h3>Additional Instructions:</h3>
                <ul>
                    <li>Do not communicate with other candidates during the exam.</li>
                    <li>Make sure to Submit your code .</li>
                    <li>Follow the guidelines provided for each question.</li>
                </ul>
            </div>
            <button className='startbtn' onClick={handleStart}>Start</button>
        </div>
        </div>
    );
};

export default Instruction;
