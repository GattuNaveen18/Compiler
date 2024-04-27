import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className="mmmm">
            <h4><u>Question</u></h4>
            <h5>Find the largest three distinct elements in an array </h5>
            <p>Given an array with all distinct elements, find the largest three elements.</p>
            <h5><u>Constraints</u></h5>
            <h6>Expected Time Complexity: O(n)</h6>
            <h6>Expected Auxiliary Space: O(1)</h6>
            <h5><u>Sample Input</u></h5>
            <h6>10, 4, 3, 50, 23, 90</h6> 
            <h5><u>Sample Output</u></h5>
            <h6>23, 50, 90</h6>
            <h5><u>Explanation</u></h5>
            <h6>The largest numbers from the given array are 90, 50, 23</h6>
        </div>
    );
}

export default Question;
