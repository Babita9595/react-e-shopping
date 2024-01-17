
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { NavLink } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { useDispatch } from "react-redux";
import {addCart} from '../redux/action'

const Product1 = ()=>{

    const {id} = useParams()
   
    const [product, setProduct] = useState(null);

    const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product))
    }

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])
    return(
        <div style={{height:'50px',width:'1000px',margin:'10%'}}>
        {product ? ( // Check if product data exists before rendering
            <div className="d-flex">
                    <div>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                     <p>Price: ${product.price}</p>
                     <button onClick={()=>{addProduct(product)}} className="btn btn-outline-danger">Add To Cart</button>
                     <button className="btn btn-outline-dark ms-4">
                        <NavLink to='/cart'>Go To Cart</NavLink> 
                        </button>
                    </div>
                    
                
                <div>
                <img src={product.image}height='200' width="200" alt={product.title} />
                </div>
            </div>
            
        ) : (
           <>
            <div className="col-md-6">
                <Skeleton height={400}/>
             </div>
             <div className="col-md-6">
             <Skeleton height={50} width={500}/>
             </div>
           </>
        )}
    </div>

    )
}
export default Product1