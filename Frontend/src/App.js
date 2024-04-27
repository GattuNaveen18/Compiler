import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Contest from './pages/Contest';
import Home from './pages/Home';
import Submission from './pages/Submission';
import {Routes, Route } from 'react-router-dom';
import Questions from './Components/QuestionLayout';
import Editor from './Components/Editor';
import Instruction from './Components/Instruction';




function App() {
  const [starttest, setstarttest] = useState(false);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/instruction" element={<Instruction />} />
      </Routes>
    </div>
  );
}


export default App;
