import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MergeSort = () => {
  const [inputArray, setInputArray] = useState([]);
  const [jsonData] = useState({
    "steps": [
        {
            "stepNumber": 1,
            "action": "split",
            "leftArray": [
                2,
                4,
                8
            ],
            "rightArray": [
                7,
                9,
                3
            ]
        },
        {
            "stepNumber": 2,
            "action": "split",
            "leftArray": [
                2
            ],
            "rightArray": [
                4,
                8
            ]
        },
        {
            "stepNumber": 3,
            "action": "split",
            "leftArray": [
                4
            ],
            "rightArray": [
                8
            ]
        },
        {
            "stepNumber": 4,
            "action": "merge",
            "mergedArray": [
                4,
                8
            ]
        },
        {
            "stepNumber": 5,
            "action": "merge",
            "mergedArray": [
                2,
                4,
                8
            ]
        },
        {
            "stepNumber": 6,
            "action": "split",
            "leftArray": [
                7
            ],
            "rightArray": [
                9,
                3
            ]
        },
        {
            "stepNumber": 7,
            "action": "split",
            "leftArray": [
                9
            ],
            "rightArray": [
                3
            ]
        },
        {
            "stepNumber": 8,
            "action": "merge",
            "mergedArray": [
                3,
                9
            ]
        },
        {
            "stepNumber": 9,
            "action": "merge",
            "mergedArray": [
                3,
                7,
                9
            ]
        },
        {
            "stepNumber": 10,
            "action": "merge",
            "mergedArray": [
                2,
                3,
                4,
                7,
                8,
                9
            ]
        }
    ],
    "sortedArray": [
        2,
        3,
        4,
        7,
        8,
        9
    ],
    "totalSteps": 10
})

const showMergeSort = ()=>{
console.log(jsonData,'jsonData')
}

  const handleInputChange = (e) => {
    setInputArray(e.target.value.split(',').map(Number));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the input array, you can perform sorting logic here
    console.log('Input Array:', inputArray);
    showMergeSort();
  };

  console.log(jsonData,"jsonData")
  return (
    <>
      <h2>Hello React</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputArray" className="form-label">
            Enter Numbers (comma-separated):
          </label>
          <input
            type="text"
            className="form-control"
            id="inputArray"
            value={inputArray}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sort
        </button>
      </form>

      {/* Display the input array horizontally only if there is data */}
      {inputArray.length > 0 && (
        <div className="mt-3">
          <h3>Input Array:</h3>
          <div className="d-flex">
            {inputArray.map((number, index) => (
              <div key={index} className="me-2">
                {number}
              </div>
            ))}
          </div>
        </div>
      )}



       {/* Display Merge Sort Steps */}
        {/* Display Merge Sort Steps */}
      {jsonData.steps && (
        <div className="mt-3">
          <h3>Merge Sort Steps:</h3>


          {jsonData.steps.map((step,index) => (
            <div key={step.stepNumber} className="row mb-3">
              <div className="col-6">
                <p>Step {step.stepNumber}: </p>
                {step.leftArray && (
                  <div>
                    <strong>Left Array:</strong> {step.leftArray.join(', ')}
                  </div>
                )}
              </div>
              <div className="col-4">
                {step.rightArray && (
                  <div>
                    <strong>Right Array:</strong> {step.rightArray.join(', ')}
                  </div>
                )}
              </div>
              {step.mergedArray && (
                <div className="col-12 mt-2">
                  <strong>Merged Array:</strong> {step.mergedArray.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MergeSort;