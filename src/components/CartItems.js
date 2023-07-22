import React, { useState, useEffect } from "react";
import './Cartite.css';

export const CartItems = (props) => {
  const {setIsCartUpdated} = props
   
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
   
    useEffect(() => {
      const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (localCartItems) {
        setCart(localCartItems);
        const totalSum = localCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setTotal(totalSum);
        console.log(totalSum)
      }
    }, []);
    
  
   

    const increment = (title) => {
        const updatedCart = cart.map((item) =>
          item.title === title ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        setCart(updatedCart);
        setTotal((prevTotal) => prevTotal + cart.find((item) => item.title === title).price);
        setIsCartUpdated(Math.random())
      };
      
      const decrement = (title) => {
        const idx = cart.findIndex((item) => item.title === title);
        if (cart[idx].quantity === 1) {
          const updatedCart = cart.filter((item) => item.title !== title);
          localStorage.setItem('cartItems', JSON.stringify(updatedCart));
          setCart(updatedCart);
        } else {
          const updatedCart = cart.map((item) =>
            item.title === title ? { ...item, quantity: item.quantity - 1 } : item
          );
          localStorage.setItem('cartItems', JSON.stringify(updatedCart));
          setCart(updatedCart);
        }
        setTotal((prevTotal) => prevTotal - cart.find((item) => item.title === title).price);
        setIsCartUpdated(Math.random())
      };
      
      
      
    return (
        <div className="cart">
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cartItems">
            {cart.length > 0 ? (
              <>
                {cart.map((item) => {
                  return (
                    <div className="cartItem" key={item.title}>
                      <img src={item.image} style={{margin:'10px'}} alt={item.title} />
                      <div className="description">
                        <p><b>{item.title}</b></p>
                        <p>{item.price * item.quantity}$</p>
                        <div className="countHandler">
                          <button onClick={() => increment(item.title)}>+</button>
                          <input type='text' value={item.quantity} readOnly />
                          <button onClick={() => decrement(item.title)}>-</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <p style={{textAlign:'center',fontWeight:'bold'}}>Cart Total: {total+"$"}</p>
              </>
            ) : (
              <p >Your cart is empty, please shop more!!</p>
            )}
          </div>
        </div>
      );
};


// import React, { useState, useEffect } from "react";
// import './Cartite.css';

// // This component renders the shopping cart items
// export const CartItems = () => {

//   // State variables
//   const [cart, setCart] = useState([]); // An array of cart items
//   const [total, setTotal] = useState(0); // The total price of the items in the cart

//   // This function is called when the component is first rendered
//   // It loads the cart items from localStorage if they exist
//   useEffect(() => {
//     const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
//     if (localCartItems) {
//       setCart(localCartItems);
//       const totalSum = localCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
//       setTotal(totalSum);
//     }
//   }, []);

//   // This function increments the quantity of the item with the given title
//   const increment = (title) => {
//     const updatedCart = cart.map((item) =>
//       item.title === title ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//     setCart(updatedCart);
//     setTotal((prevTotal) => prevTotal + cart.find((item) => item.title === title).price);
//   };

//   // This function decrements the quantity of the item with the given title
//   const decrement = (title) => {
//     const idx = cart.findIndex((item) => item.title === title);
//     if (cart[idx].quantity === 1) {
//       const updatedCart = cart.filter((item) => item.title !== title);
//       localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//       setCart(updatedCart);
//     } else {
//       const updatedCart = cart.map((item) =>
//         item.title === title ? { ...item, quantity: item.quantity - 1 } : item
//       );
//       localStorage.setItem('cartItems', JSON.stringify(updatedCart));
//       setCart(updatedCart);
//     }
//     setTotal((prevTotal) => prevTotal - cart.find((item) => item.title === title).price);
//   };

//   // This function returns the rendered HTML for the component
//   return (
//     <div className="cart">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cartItems">
//         {cart.length > 0 ? (
//           <>
//             {cart.map((item) => {
//               return (
//                 <div className="cartItem" key={item.title}>
//                   <img src={item.image} style={{margin:'10px'}} alt={item.title} />
//                   <div className="description">
//                     <p><b>{item.title}</b></p>
//                     <p>{item.price * item.quantity}$</p>
//                     <div className="countHandler">
//                       <button onClick={() => increment(item.title)}>+</button>
//                       <input type='text' value={item.quantity} readOnly />
//                       <button onClick={() => decrement(item.title)}>-</button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//             <p style={{textAlign:'center',fontWeight:'bold'}}>Cart Total: {total+"$"}</p>
//           </>
//         ) : (
//           <p >Your cart is empty, please shop more!!</p>
//         )}
//       </div>
//     </div>
//   );
// };
