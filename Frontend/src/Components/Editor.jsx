import React from 'react';
import './Editor.css';
import Compiler from './Compiler';
import Question from './Question';
import { useNavigate } from 'react-router-dom';

const Editor = () => {

    const navigate = useNavigate(); 

    const viewQuestions = () => {
        navigate('/questions');
    };


    return (
        <div className="econtainer">
            <div className='nav-container'>
            <h3 className="vertical-text" onClick={viewQuestions}>Questions</h3>
            </div>
            <div className='left-column-container'>
                <div className='left-column'>
                    <Question/>
                </div>
            </div>
            <div className='right-column-container'>
                <div className='right-column'>
                    <Compiler/>
                </div>
            </div>
        </div>
    )
}

export default Editor;
