

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './merge.css'


const MergeSortVisualization = () => {

    const originalArray = [2, 1, 5, 3, 8, 6, 9, 0, 4];
    const [firstHalf, setFirstHalf] = useState([]);  //1-left
    const [secondHalf, setSecondHalf] = useState([]);  //1-right 

    const [fflArray, setFflArray] = useState([]); //2Left-1-left
    const [ffrArray, setFfrArray] = useState([]); //2Left-1-right

    const [ffl2array, setFflarray] = useState([])// 3Left-1-1-left  //---
    const [ffr2array, setFfrarray] = useState([])//3Left-1-1-right

    const [ffl21array, setFfl21array] = useState([]) //3Right-1-left  //4Left-3
    const [ffr21array, setFfr21array] = useState([]) //3Right-1-right  //4Left-4

    const [ffl4l1array, setFf4array] = useState([]) //4Left-1
    const [ffl4l2array, setFr4array] = useState([])//4Left-2


    useEffect(() => {
        // Calculate the midpoint of the array
        const midpoint = Math.ceil(originalArray.length / 2);
        setFirstHalf(originalArray.slice(0, midpoint));//1-left
        setSecondHalf(originalArray.slice(midpoint)); //1-right


        const fflMidpoint = Math.ceil(firstHalf.length / 2);
        setFflArray(firstHalf.slice(0, fflMidpoint));
        setFfrArray(firstHalf.slice(fflMidpoint));

        const ffl2Mindpoint = Math.ceil(fflArray.length / 2)
        setFflarray(fflArray.slice(0, ffl2Mindpoint))
        setFfrarray(fflArray.slice(ffl2Mindpoint))

        const ffrMidpoint = Math.ceil(ffrArray.length / 2)
        setFfl21array(ffrArray.slice(0, ffrMidpoint))
        setFfr21array(ffrArray.slice(ffrMidpoint))

        const ffl4Midpoint = Math.ceil(ffl2array.length / 2)
        setFf4array(ffl2array.slice(0, ffl4Midpoint))
        setFr4array(ffl2array.slice(ffl4Midpoint))


    }, [originalArray]);

    return (
        <div className='row'>
            <div className='col-2'>
                steps-1
            </div>

            <div className='col-5 border border-primary p-1'>
                <p>left array :</p>
                <div className='flex-container'>
                    {firstHalf.map((value, index) => (
                        <div key={index}>{value}</div>
                    ))}
                </div>
            </div>


            <div className='col-5  border border-primary p-1'>
                <p>right array :</p>
                <div className='flex-container'>
                    {secondHalf.map((value, index) => (
                        <div className='' style={{ listStyle: 'none'  }} key={index}>{value}</div>
                    ))}
                </div>
            </div>

            {/* row-2 */}


            <div className='row mt-5'>
                <div className='col-2'>
                    steps-2
                </div>

                <div className='col-5 border border-secondary p-1' >

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div className='me-3 split-card'>
                            <p>FFL (First Half Left):</p>
                            <div className='flex-container'>
                                {fflArray.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div> 
                        </div>

                        <div style={{ marginLeft: '8px' }} className=' ms-5 '>
                            <p>FFR (First Half Right):</p>
                            <div className='flex-container'>
                                {ffrArray.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='col-5 border border-secondary p-1'>

                </div> */}

            </div>


            {/* row-3 */}
            <div className='row mt-5'>
                <div className='col-2'>
                    steps-3
                </div>

                <div className='col-5 border border-secondary p-1' >

                    <div style={{ display: 'flex' }}>
                        <div className='me-3 split-card'>
                            <p>FFL (First Half Left):</p>
                            <div className='flex-container'>
                                {ffl2array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div> 
                        </div>

                        <div className='me-3 split-card'>
                            <p>FFL (First Half Left):</p>
                            <div className='flex-container'>
                                {ffr2array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div> 
                        </div>

                        <div style={{ marginLeft: '5px' }} className='split-card ms-5 '>
                            <p>FFR :</p>
                            <div className='flex-container'>
                                {ffl21array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div>
                        </div>

                        <div className='split-card' style={{ marginLeft: '5px' }}>
                            <p>FFR :</p>
                            <div className='flex-container'>
                                {ffr21array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* row-4 */}

            <div className='row mt-5'>
                <div className='col-2'>
                    steps-4
                </div>

                <div className='col-5 border border-secondary p-1' >

                    <div style={{ display: 'flex' }}>
                        <div className='me-3 split-card'>
                            <p>FFL (First Half Left):</p>
                            <div className='flex-container'>
                                {ffl4l1array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div> 
                        </div>

                        <div className='me-3 split-card'>
                            <p>FFL (First Half Left):</p>
                            <div className='flex-container'>
                                {ffl4l2array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div> 
                        </div>

                        <div className='me-3 split-card'>
                            <p>FFL (First Half Left):</p>
                            <div className='flex-container'>
                                {ffr2array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div> 
                        </div>

                        <div  style={{ marginLeft: '5px' }} className='split-card ms-5 '>
                            <p>FFR :</p>
                            <div className='flex-container'>
                                {ffl21array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div>
                        </div>

                        <div className='split-card' style={{ marginLeft: '5px' }}>
                            <p>FFR :</p>
                            <div className='flex-container'>
                                {ffr21array.map((value, index) => (
                                    <div key={index}>{value}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MergeSortVisualization;