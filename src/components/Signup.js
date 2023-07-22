// import React, { useState } from "react";
// // import './signup.css';
// import { useNavigate, Link } from 'react-router-dom';

// import axios from "axios";

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [phoneno,setPhoneno] = useState('')
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const body = {
//         Name: username,
//         Email: email,
//         Password: password,
//         Confirmpassword: confirmPassword,
//         phoneNo:phoneno
//     }
//     await axios.post('http://localhost:3000/signupdetails', body)
//       .then((response) => {
//         console.log(response.data);
//         alert('signup succesfull')
//         setUsername("")
//         setEmail("")
//         setPassword("")
//         setConfirmPassword("")
//         setPhoneno("")
//         navigate('/login');
//       })
//       .catch((error) => {
//         console.log(error);
//         alert('signup failed')
//       });
//   };
//   return (
//     <>
//       <center className="center">
//         <div className="signup">
//           <div className="card" style={{  fontSize: '20px',width:'50vw',marginTop:'30px' }}>
//             <h1 style={{fontSize:'25px',marginBottom:'20px'}}>Registration Form</h1>
//             <form className="label" style={{ textAlign: 'right', fontSize: '30px', color:'white', }}>
//               <div >
//                 <label style={{fontSize:'25px'}}><b>User Name</b></label> &nbsp;
//                 <input style={{ width: '200px', height: '35px', fontSize: '20px' }} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//               </div> &nbsp;
//               <div>
//                 <label style={{fontSize:'25px'}}><b>Email</b></label> &nbsp;
//                 <input style={{ width: '200px', height: '35px', fontSize: '20px' }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//               </div> &nbsp;
//               <div>
//                 <label style={{fontSize:'25px'}}><b>Password</b></label>  &nbsp;
//                 <input style={{ width: '200px', height: '35px', fontSize: '20px' }} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//               </div> &nbsp;
//               <div>
//                 <label style={{fontSize:'25px'}}><b>Confirm Password</b></label>  &nbsp;
//                 <input style={{ width: '200px', height: '35px', fontSize: '20px' }} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//               </div> &nbsp;
//               <div>
//                 <label style={{fontSize:'25px'}}><b>phoneNo</b></label>  &nbsp;
//                 <input style={{ width: '200px', height: '35px', fontSize: '20px' }} type="password" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} />
//               </div>
//               <div style={{ textAlign: 'center' }}>
//                 <button style={{ backgroundColor: "black", fontSize: '25px', borderRadius: '10px', color: 'white',marginTop:'20px',marginBottom:'20px' }} onClick={(e) => handleSubmit(e)}>Signup</button>
//               </div>
//               <p className="text-center" style={{color:'black',fontSize:'25px'}}><b>Have already an account</b> <Link to="/login" style={{ color: 'blue' }}><b>Login</b></Link></p>
//             </form>
//           </div>
//         </div>
//       </center>
//     </>

//   );
// }

// export default Signup;

import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { InputGroup, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNoError, setPhoneNoError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const navigate = useNavigate();

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation
    if (username === '') {
      setNameError('*Email is required');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('*Password is required');
    } else {
      setPasswordError('');
    }

    if (phoneno === '') {
      setPhoneNoError('*Phone Number is required');
    } else {
      setPhoneNoError('');
    }

    if (confirmPassword === '') {
      setConfirmPasswordError('*Confirm Password is required');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }

    // Continue with form submission if no errors
    if (username !== '' && email !== '' && password !== '' && phoneno !== '' && confirmPassword !== '' && confirmPassword === password) {
      const body = {
        Name: username,
        Email: email,
        Password: password,
        Confirmpassword: confirmPassword,
        phoneNo: phoneno
      }

      try {
        const response = await axios.post('http://localhost:3000/signupdetails', body);
        console.log(response.data);
        alert('signup successful')
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setPhoneno('')
        navigate('/login');
      } catch (error) {
        console.log(error);
        alert('signup failed')
      }
    }
  };

  return (
    <>
      <center className="center">
        <div className="signup">
          <div className="card" style={{ fontSize: '20px', width: '50vw', marginTop: '30px' }}>
            <h1 style={{ fontSize: '25px', marginBottom: '20px' }}>Registration Form</h1>
            <form className="label" style={{ textAlign: 'right', fontSize: '30px', color: 'white' }}>
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon1" style={{ width: "6rem", alignItems: 'center' }}>User Name</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="User Name"
                    aria-label="User Name"
                    aria-describedby="basic-addon1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </InputGroup>
                {nameError && <p className="error" style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{nameError}</p>}
              </div> &nbsp;
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon2" style={{ width: "6rem", alignItems: 'center' }}>Email</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
                {emailError && <p className="error" style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{emailError}</p>}
              </div> &nbsp;
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon3" style={{ width: "6rem", textAlign: 'center' }}>Password</InputGroup.Text>
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
              </div> &nbsp;
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon4" style={{ width: "6rem", textAlign: 'center' }}>Confirm Password</InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </InputGroup>
                {confirmPasswordError && <p className="error" style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{confirmPasswordError}</p>}
              </div> &nbsp;
              <div className="input-wrapper">
                <InputGroup className="mb-3" style={{ width: '30rem', margin: 'auto' }}>
                  <InputGroup.Text id="basic-addon5" style={{ width: "6rem", textAlign: 'center' }}>Phone Number</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    value={phoneno}
                    onChange={(e) => setPhoneno(e.target.value)}
                  />
                </InputGroup>
                {phoneNoError && <p className="error" style={{ color: 'red', fontSize: '15px', textAlign: 'left' }}>{phoneNoError}</p>}
              </div>
              <div style={{ textAlign: 'center' }}>
                <button style={{ backgroundColor: "black", fontSize: '25px', borderRadius: '10px', color: 'white', marginTop: '20px', marginBottom: '20px' }} onClick={(e) => handleSubmit(e)}>Signup</button>
              </div>
              <p className="text-center" style={{ color: 'black', fontSize: '25px' }}><b>Have already an account</b> <Link to="/login" style={{ color: 'blue' }}><b>Login</b></Link></p>
            </form>
          </div>
        </div>
      </center>
    </>
  );
}

export default Signup;

