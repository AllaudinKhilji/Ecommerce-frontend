
// import React, { useState, useEffect } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import * as PiIcons from 'react-icons/pi'

// export default function Header() {
//     const [count, setCount] = useState(0);
//     console.log(count)
//     useEffect(() => {
//       const cart = JSON.parse(localStorage.getItem('cartItems'));
//       if (cart) {
//         const totalQuant = cart.reduce((total, item) => total + item.quantity, 0);
//         setCount(totalQuant);
//       }
//     }, []);
//     return (
//         <>
//             <Nav className="justify-content-end" activeKey="/home" style={{backgroundColor:'black',height:'50px'}}>
//                 <Nav.Item>
//                     <Nav.Link href="/" style={{color:'white',fontSize:'20px'}}>Home</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="link-1"style={{color:'white',fontSize:'20px'}}>About Us</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="link-2" style={{color:'white',fontSize:'20px'}}>Contact Us</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link href="/cart" eventKey="link-2" style={{color:'white',fontSize:'20px'}}><PiIcons.PiShoppingCartSimpleBold/></Nav.Link>
//                 </Nav.Item>

//             </Nav>
//         </>


//     );
// }


// import React, { useState, useEffect } from 'react';
// import Nav from 'react-bootstrap/Nav';
// import * as PiIcons from 'react-icons/pi';

// export default function Header() {
//     const [count, setCount] = useState(0);
//     const cart = JSON.parse(localStorage.getItem('cartItems'));
//       const totalQuant = cart.reduce((total, item) => total + item.quantity, 0);
//       console.log(totalQuant);


//     return (
//         <>
//             <Nav className="justify-content-end" activeKey="/home" style={{backgroundColor:'black',height:'50px'}}>
//                 <Nav.Item>
//                     <Nav.Link href="/" style={{color:'white',fontSize:'20px'}}>Home</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="link-1" style={{color:'white',fontSize:'20px'}}>About Us</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link eventKey="link-2" style={{color:'white',fontSize:'20px'}}>Contact Us</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link href="/cart" eventKey="link-2" style={{color:'white',fontSize:'20px'}}>
//                         <PiIcons.PiShoppingCartSimpleBold />

//                     </Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         </>
//     );
// }

import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import * as PiIcons from 'react-icons/pi';
import * as FaIcons from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const [count, setCount] = useState(0);

  function cartQuant() {
    const cart = JSON.parse(localStorage.getItem('cartItems'));
    var totalQuant = 0
    if (cart) {
      cart.forEach((item) => {
        totalQuant += item.quantity
      });
    }

    setCount(totalQuant)

  }

  useEffect(() => {
    // Update the count state whenever the totalQuant changes (i.e., whenever the cart items change)
    cartQuant();
  });

  const navigate = useNavigate();
  const handleLogout = () => {

    localStorage.removeItem('userEmail')
    localStorage.removeItem('adminEmail')
    // alert('Are you sure to log out ?')

    navigate('/login');
  }

  const LogOutPop = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Logging out',
      text: 'Are you sure to log out ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Logged out!',
          'You have successfully loggedout.',
          'success'
        )
        handleLogout()
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your logout is failed',
          'error'
        )
      }
    })
  }
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home" style={{ backgroundColor: 'black', height: '50px' }}>
        <Nav.Item>
          <Nav.Link href="/home" style={{ color: 'white', fontSize: '20px' }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about" style={{ color: 'white', fontSize: '20px' }}>About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact" style={{ color: 'white', fontSize: '20px' }}>Contact Us</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/cart" eventKey="link-2" style={{ color: 'white', fontSize: '20px' }}>
            {/* Display the cart icon and count */}
            <PiIcons.PiShoppingCartSimpleBold />
            {count > 0 && <span style={{ marginLeft: '5px' }}>{count}</span>}
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{ color: 'white', fontSize: '20px' }} onClick={LogOutPop}><FaIcons.FaPowerOff /></Nav.Link>
        </Nav.Item>


      </Nav>
    </>
  );
}
