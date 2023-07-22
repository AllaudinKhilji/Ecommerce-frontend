
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
    const [products, setProducts] = useState([])
  const navigate = useNavigate();
    const {setIsCartUpdated} = props
    
  
    useEffect(() => {
      pro();
    }, [])
  
    const pro = async () => {
      await axios
        .get("http://localhost:3003/getdetails")
        .then((response) => {
          setProducts(response.data.ProductInfo)
          //console.log(PRODUCTS)
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    };
  
  
  
  
    
   const addToCart = (price, image, title) => {
  const localCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  const existingItem = localCartItems.find(item => item.title === title);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    // Remove the dollar sign and parse the price as a number
    const parsedPrice = parseFloat(price.replace("$", ""));
    localCartItems.push({ title, image, price: parsedPrice, quantity: 1 });
  }
  setIsCartUpdated(Math.random())
  localStorage.setItem('cartItems', JSON.stringify(localCartItems));
};
const Description =  (Products) =>{
  localStorage.setItem('description', JSON.stringify(Products));
  navigate('/description')
}
      





  return (
    <div>
      {/* Display the product information */}
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Ro-One Ecom</h1>
      <div  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {/* {products.map((product) => (
          <div onClick={()=>Description(product.Price,product.Image, 
          product.Name,product.Image,product.Image2,product.Url)} key={product._id} style={{ border: "1px solid #ccc", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src={product.Image} alt={product.Name} style={{ width: "15vw", height: "20vh" }} />
            <p style={{ textAlign: "center", fontSize: "30px" }}>{product.Name}</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Price: {product.Price}$</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Category: {product.Category}</p>
            <button onClick={() => addToCart(product.Price, product.Image, product.Name)} style={{ color: "white", backgroundColor: "black", borderRadius: "10px" }}>Add To Cart</button>
          </div>
        ))} */}
        {products.map((product) => (
          <div
            // Pass the entire product object
            key={product._id}
            style={{ border: "1px solid #ccc", padding: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >  <div  onClick={() => Description(product)}>
            <img src={product.Image} alt={product.Name} style={{ width: "15vw", height: "20vh" }} />
            <p style={{ textAlign: "center", fontSize: "30px" }}>{product.Name}</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Price: {product.Price}$</p>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>Category: {product.Category}</p>
             </div>
             <button onClick={() => addToCart(product.Price, product.Image, product.Name)} style={{ color: "white", backgroundColor: "black", borderRadius: "10px" }}>Add To Cart</button> 
          </div>
          
        ))}
      </div>
    </div>
  );
};



