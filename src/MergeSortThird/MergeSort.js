import { useEffect, useState } from "react";

const MergeSortvisualization1 = () => {
  const [sortSteps, setSortSteps] = useState([]);
  const [totalLevels, setTotalLevels] = useState([]);
  const sortedUI = {};

  useEffect(() => {
    // Update the state after the sorting is completed
    if(Object.keys(sortedUI).length && !totalLevels.length){

        const levelsList = Object.keys(sortedUI).sort((a, b) => a - b);
        const levelsListRev = Object.keys(sortedUI).sort((a, b) => b - a);
        console.log([...levelsList.filter(item => Number(item) >= 0 ), ...levelsListRev.filter(item => Number(item) < 0 ).reverse()])
        setTotalLevels([...levelsList.filter(item => Number(item) >= 0 ), ...levelsListRev.filter(item => Number(item) < 0 ).reverse()]);
        setSortSteps(sortedUI)
    }
  }, [sortedUI]);

  function mergeSort(arr, level) {
    if (!sortedUI[`${level}`]) {
      sortedUI[`${level}`] = [];
    }

    if (!sortedUI[`${level}`].includes(arr)) {
      sortedUI[`${level}`].push(arr);
    }
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
      mergeSort(left, level + 1),
      mergeSort(right, level + 1),
      level + 1
    );
  }

  function merge(left, right, level) {
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

    const mergedArr = result
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));

    if (!sortedUI[`-${level}`]) {
      sortedUI[`-${level}`] = [];
    }

    if (!sortedUI[`-${level}`].includes(mergedArr)) {
      sortedUI[`-${level}`].push(mergedArr);
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  // Example usage:
  const unsortedArray = [38, 27, 43, 3, 9,10,5,32];
  const sortedArray = mergeSort(unsortedArray, 0);
  console.log(sortedUI);
console.log(totalLevels,'totalLevel')
  return(
    <div>
        {totalLevels.map(item  =>{
            console.log(item,'totallevels')
            return (
                <div style={{padding: 5, display: 'flex', justifyContent:'center'}}>
                    {sortSteps[item].map(subItem => {
                        console.log(subItem,'sortstep')
                        return (
                            <div style={{padding: 5, display: 'flex'}}>
                                {console.log(subItem)}
                                {subItem.map(sub_subItem => {
                                    console.log(sub_subItem,'subItem')
                                    return (
                                        <div  style={{padding: 5, display: 'flex', borderRadius: '5px', backgroundColor: '#b3323b', color: 'white'}}>
                                            {sub_subItem}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )

};

export default MergeSortvisualization1;
