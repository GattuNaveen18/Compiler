import React, { useState } from 'react';
import './MQuestion.css';

const MQuestion = ({Qcount}) => {
const [inputText, setInputText] = useState('');

const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  let val = Qcount + 1000
  return (
    <div className='mQuestion'>
      <div className='question'>
      <input type="radio" id="question" name={Qcount} value={Qcount}/>
        <label>Question :{Qcount}</label>
        <textarea
        id="multilineInput"
        value={inputText}
        onChange={handleInputChange}
        rows={4} 
        cols={50} 
      />
      </div>

      <div className='radio'>
        <label htmlFor="option1">1</label>
        <input type="radio" id="option1" name={val} value="1"/>
        <input type='text'/>
      </div>

      <div className='radio'>
        <label htmlFor="option2">2</label>
        <input type="radio" id="option2" name={val} value="2"/>
        <input type='text'/>
      </div>

      <div className='radio'>
        <label htmlFor="option3">3</label>
        <input type="radio" id="option3" name={val} value="3"/>
        <input type='text'/>
      </div>

      <div className='radio'>
        <label htmlFor="option4">4</label>
        <input type="radio" id="option4" name={val} value="4"/>
        <input type='text'/>
      </div>
    </div>
  );
};

export default MQuestion;
