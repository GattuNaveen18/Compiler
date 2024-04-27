import React, { useState } from 'react';
import './Compiler.css';
import Confirm from './Confirm';
import correct from '../Assets/correct.png';
import wrong from '../Assets/wrong.png';

const Compiler = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isReset, setIsReset] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isRun, setIsRun] = useState(false);
    const [isTestCaserun, setIsTestCaseRun] = useState(false);
    const [inputText, setInputText] = useState('//Start Code Here ');
    const [testcase1, setTestCase1] = useState(true);
    const [testcase2, setTestCase2] = useState(true);
    const [testcase3, setTestCase3] = useState(true);
    const [output, setOutput] = useState('');

    const handleReset = () => {
        setIsReset(true);
        console.log(isReset);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSelectionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const renderLineNumbers = () => {
        const lines = inputText.split('\n');
        return lines.map((_, index) => <div key={index + 1}>{index + 1}</div>);
    };

    const handleNoClick = () => {
        setIsReset(false);
        setIsSubmit(false);
    };

    const handleYesClick = () => {
        // Implement logic for reset or submit here
    };

    const handleSubmit = () => {
        setIsSubmit(true);
        console.log(isSubmit);
    };

    const handleCheckboxChange = (event) => {
        setIsTestCaseRun(event.target.checked);
      };

    const handleRun = () => {
        setIsRun(true)

        const fetchText = async () => {
            try {
                const response = await fetch('http://localhost:8080/get_text', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: inputText })
                });
                const data = await response.json();
                console.log('Response from server:', data);
            } catch (error) {
                console.error('Error fetching text:', error);
                // Add UI feedback to inform users about the error
            }
        };

        fetchText();


        const fetchOutput = async () => {
            try {
              const response = await fetch('http://localhost:8080/get_output_text');
              if (!response.ok) {
                throw new Error('NO OUTPUT');
              }
              const data = await response.json();
              setOutput(data.content);
            } catch (error) {
              console.error('NO OUTPUT', error);
            }
          };
      
          fetchOutput();
    };

    return (
        <div>
            <div className="compiler-container">
                <label className='language'>Language : </label>
                <select value={selectedOption} onChange={handleSelectionChange} className='select'>
                    <option value="">Python 3 </option>
                    <option value="option1">C# </option>
                </select>
                {/* Uncomment this line if you want to include the reset image */}
                {/* <img src={reset} height={30} width={30} className='rbtn'/> */}
                <li className='reset' onClick={handleReset}>Reset</li>
            </div>
            <div className='number'>
                <span>{renderLineNumbers()}</span>
                <textarea
                    id="multilineInput"
                    value={inputText}
                    onChange={handleInputChange}
                    rows={4}
                    cols={50}
                    className='textarea'
                />
            </div>
            <div className='btns'>
                <input type='checkbox' 
                    checked={isTestCaserun}
                    onChange={handleCheckboxChange}
                /><label>Test against custom inputs</label>
                <button className='runbtn' onClick={handleRun}>Run</button>
                <button className='submitbtn' onClick={handleSubmit}> Submit</button>
            </div>
            {(isReset || isSubmit) &&
                <div>
                    <Confirm text={isReset ? 'Are you sure want to Reset?' : 'Are you sure want to Submit?'} onYesClick={handleYesClick} onNoClick={handleNoClick} />
                </div>}
                {isRun && <div className='output-container'>
                <div className='output-field'>
                    <p> OUTPUT = {output}</p>
                </div>
               {isTestCaserun && isRun && <div>
                    <div className='test-case'>
                    <img src={testcase1 ? correct : wrong} height={25} width={25} className='test-img' />
                    <span className='test-name'>TestCase01</span>
                    </div>
                    <div className='test-case'>
                    <img src={testcase2 ? correct : wrong} height={25} width={25} className='test-img' />
                    <span className='test-name'>TestCase02</span>
                    </div>
                    <div className='test-case'>
                    <img src={testcase3 ? correct : wrong} height={25} width={25} className='test-img' />
                    <span className='test-name'>TestCase03</span>
                    </div>
                </div>}
                </div>}

        </div>
    );
}

export default Compiler;
