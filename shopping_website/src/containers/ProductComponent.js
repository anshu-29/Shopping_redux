import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const ProductComponents =  () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id,title,image,price,category} = product;
        return (
            <div className="four wide computer four wide tablet eight wide mobile column" key={id}>
            <Link to={`/product/${id}`}>
    
               <div className="ui link card">
                <div className="card">
                    <div className="image">
                        <img src= {image} alt = {title} style={{ height: "200px" , width : "100%" , objectFit:"contain" }}  ></img>
                    </div>
                        <div className="content">
                            <div className="header">
                              {title}
                            </div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    
                </div>
               </div>
               </Link>
            </div>
        );
    });
    return (
        <>
            {renderList}
        </>
    )

   
}
export default ProductComponents ;