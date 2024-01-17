import React from "react";
import Image from '../assets/images.png'
import Product from "./Product";

const Home =()=>{
    return(
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src='' className="card-img" alt="drvv"height='500px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">

                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text fs-2">CHECK OUT ALL THE TRENDS </p>
                    </div>
                   
                </div>
            </div>

            <Product/>
        </div>
    )
}
export default Home 