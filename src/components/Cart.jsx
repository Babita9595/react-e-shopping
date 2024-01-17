import React from 'react';
import {  useSelector } from 'react-redux';


const Cart =()=>{
    const selector = useSelector((state)=>state.handleCart)
    return(
        <div>
            <h2>{selector.title}</h2>
            <h5>{selector.price}</h5>

        </div>
    )
}

export default Cart;