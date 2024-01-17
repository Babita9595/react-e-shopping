const express = require('express');
const app = express();
const port = 7000;

app.use(express.json());

// Merge Sort Function
async function mergeSort(arr, steps) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Split step
  const splitStep = {
    stepNumber: steps.length + 1,
    action: 'split',
    leftArray: left.slice(),
    rightArray: right.slice(),
  };
  steps.push(splitStep);

  // Recursive split calls
  const leftSorted = await mergeSort(left, steps);
  const rightSorted = await mergeSort(right, steps);

  // Merge step
  const mergedArray = merge(leftSorted, rightSorted);
  const mergeStep = {
    stepNumber: steps.length + 1,
    action: 'merge',
    mergedArray: mergedArray.slice(),
  };
  steps.push(mergeStep);

  return mergedArray;
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const remainingLeft = left.slice(leftIndex);
  const remainingRight = right.slice(rightIndex);

  return result.concat(remainingLeft).concat(remainingRight);
}

// Route to perform merge sort and send steps data and final sorted array to frontend
app.post('/merge-sort', async (req, res) => {
  const { array } = req.body;
  const steps = [];
  
  // Perform merge sort
  const sortedArray = await mergeSort(array, steps);

  // Filter split and merge steps separately
  const splitSteps = steps.filter(step => step.action === 'split');
  const mergeSteps = steps.filter(step => step.action === 'merge');

  // Send steps data and final sorted array to frontend
  res.json({ steps: splitSteps.concat(mergeSteps), sortedArray, totalSteps: steps.length });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});