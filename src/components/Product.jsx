import React, { useEffect, useState } from "react";
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';


const Product = ()=>{

   
    const [data ,setData] = useState([])
    
    const [filter,setFilter] =useState(data)
    
    const [loading,setLoading] =useState(false)

   
    
    let componentMounted = true;


    useEffect(()=>{
        Loading();
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>
        {
            if(componentMounted){
                            setData( res.data);
                            // setFilter(res.data)
                            setLoading(false);
                            console.log('filter',res.data)
                        }
            
                        return ()=>{
                            componentMounted = false;
                        }
        }
        )
    },[])

    // useEffect(()=>{
    //     const getProducts = async ()=>{
    //         setLoading(true);
    //         const response = await fetch('https://fakesstoreapi.com/products')
    //         if(componentMounted){
    //             setData(await response.clone().json());
    //             setFilter(await response.json())
    //             setLoading(false);
    //             console.log(filter)
    //         }

    //         return ()=>{
    //             componentMounted = false;
    //         }
    //     }
      

    //     getProducts();
    // })

const Loading = ()=>{
    return (<>
    
    <div className="col-md-3">
        <Skeleton/>
    </div>
    </>)
}

const selectFilter =(cat)=>{
    const UpdatedList = data.filter((item)=>item.category === cat)
    setFilter(UpdatedList)
console.log(cat)
}

const ShowProducts =()=>{
    return(
        <div className="buttons col-md-6">
            <button className="btn btn-outline-drak" onClick={()=>{setFilter(data)}}>All</button>
            <button className="btn btn-outline-drak" onClick={()=>{selectFilter("men'\s clothing")}}>Men's Clothing</button>
            <button className="btn btn-outline-drak" onClick={()=>{selectFilter("women'\s clothing")}}>Women's Clothing</button>
            <button className="btn btn-outline-drak" onClick={()=>{selectFilter("jewelery")}}>Jwelory</button>
            <button className="btn btn-outline-drak" onClick={()=>{selectFilter("electronics")}}>electronics</button>
            <div className="d-flex justify-content-between " style={{width:'700px',  flexWrap: 'wrap'}}>
            {
                
                filter?.map((filterdata)=>
              <div className="col-md-3 text-center w-50 h-100"> 
                
                      
                       <div class="card me-2 text-center w-50 h-100 p-4">
                            <img src={filterdata?.image} class="card-img-top  text-center " height="200" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{filterdata?.title}</h5>
                                {/* <p class="card-text">{filterdata?.category}</p> */}
                                <p class="card-text"><small class="text-muted">Rs.{filterdata?.price} && {filterdata.rating.rate}</small></p>
                            </div>
                            <button className="btn btn-outline-dark">
                                <NavLink to={`/products/${filterdata?.id}`}>Buy Now</NavLink>
                            </button>
                        </div>
                     
                </div>
              
                )
            }

            </div>
        </div>
    )
}

    return(
        <div>
            <div className="container my-5 py-5">
                <div className="row"> 
                <div className="col-12 mb-5">
                    <h1 className="display-6 fw-bolder text-center">Latest Product</h1>
                <hr/>
                </div>

                </div>

                <div className="row justify-content-center col-md-6"></div>
                {loading ? <Loading/> :<ShowProducts/>}
            </div>
        </div>
    )
}

export default Product;