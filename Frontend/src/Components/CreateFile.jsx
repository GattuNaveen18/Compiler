import React, { useState } from 'react';

const CreateFile = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    // Create a new Blob object containing the text value
    const blob = new Blob([inputValue], { type: 'text/plain' });

    // Create a link element
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    //a.download = 'mytextfile.txt'; // Set the download attribute with desired filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <textarea value={inputValue} onChange={handleInputChange} rows="10" cols="50" />
      <br />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default CreateFile;
