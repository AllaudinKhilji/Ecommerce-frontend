// import React, { useEffect, useState } from "react";
// import { useNavigate, Link } from 'react-router-dom';
// // import "./login.css"
// import axios from "axios";

// const SignForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send login data to the server here
//     const body = {
//       Email: email,
//       typedPassword: password
//     }
//     await axios.post("http://localhost:3000/logindetails", body)
//       .then((response) => {
//         console.log(response.data.message);
//         alert('login succesfull')
//         localStorage.setItem('userEmail', JSON.stringify(email));
//         navigate('/home');

//       })
//       .catch((error) => {
//         console.log(error);
//         alert('login failed')
//       });
   
//   };

//   return (
    
//     <center className="center" >
        
//       <div className="login" >
//       <h1 style={{marginBottom:'20px',marginTop:'20px',marginLeft:'60px'}}>Welcome To RO-One Ecom</h1>
//         <div className="card" style={{ textAlign: 'center', fontSize: '20px' }}>
//           <h1 style={{marginBottom:'10px'}}>Please Login</h1>
          
//           <form style={{ textAlign: 'center', fontSize: '30px' }}>
//             <div>
//               <label>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <input
//                 style={{ width: '200px', height: '40px', fontSize: '20px' }}
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div> &nbsp;
//             <div>
//               <label>Password</label> &nbsp;
//               <input
//                 style={{ width: '200px', height: '40px', fontSize: '20px' }}
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div> <br />
//             <div style={{ textAlign: 'center' }}>
//               <button style={{ backgroundColor: "black", color: 'white', fontSize: '25px', borderRadius: '10px' }} onClick={(e) => handleSubmit(e)}>Login</button>
//             </div>
//             <p className="text-center">Don't have an account? <Link to="/signup" style={{ color: 'blue' }}><b>Signup</b></Link></p>
//           </form>
//         </div>
//       </div>
//     </center>
//   );
// };

// export default SignForm;

import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Signform = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (password === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (email === '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }

    // Continue with form submission if no errors
    if (password !== '' && email !== '') {
      // Send login data to the server here
      const body = {
        Email: email,
        Password: password
      };

      try {
        const response = await axios.post("http://localhost:3000/logindetails", body);
        console.log(response);
        if (response.status === 200) {
          alert('Login successful');
          navigate('/home');
        } else {
          alert('Invalid email or password. Please try again.');
        }
      } catch (error) {
        console.log(error);
        alert('Error occurred during login. Please try again.');
      }
    }
  };

  return (
    <center className="center">
      <div className="login">
        <h1 style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '60px' }}>Welcome To RO-One Ecom</h1>
        <div className="card" style={{ textAlign: 'center', fontSize: '20px' }}>
          <h1 style={{ marginBottom: '10px' }}>Please Login</h1>

          <form style={{ textAlign: 'center', fontSize: '30px' }}>
            <div className="field">
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon1" style={{ width: "6rem", alignItems: 'center' }}>Email</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {emailError && <p className="error" style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{emailError}</p>}
              </div>
              <br />
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon1" style={{ width: "6rem", textAlign: 'center' }}>Password</InputGroup.Text>
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text onClick={PasswordVisibility}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </InputGroup.Text>
                </InputGroup>
                {passwordError && <p className="error" style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{passwordError}</p>}
              </div>
            </div>
            <div>
              <Button className="button" variant='light' style={{ backgroundColor: 'black', marginLeft: '20px', color: "white" }} onClick={(e) => handleSubmit(e)}>Login now</Button>
              <p className="text-center">Don't have an account? <Link to="/signup" style={{ color: 'blue' }}><b>Signup</b></Link></p>
            </div><br />
          </form>
        </div>
      </div>
    </center>
  );
};

export default Signform;
