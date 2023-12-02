import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginTopBar from '../Pages/LoginTopBar';
import LoginFooter from '../Pages/LoginFooter';

const Login = () => {
  let [username, setusername] = useState("");
  let [password, setpassword] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    let authtoken = localStorage.getItem("token");
  
    if (authtoken) {
      navigate("/home")
    }
  }, [navigate])
  let handlelogin = (e) => {
    e.preventDefault()
    if (!username || !password) {
      return alert("Feilds are required")
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": username,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://localhost:5055/api/login`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.token){
          console.log(result);
          localStorage.setItem("token", JSON.stringify(result.token)); 
          navigate("/home");
        }
        else {
          alert("Invalid Email or Password");
        }
       
        })
      .catch(error => console.log('error', error));
  }
  return (
    <>
    <LoginTopBar/>

      <div className='content-body'>
      <div className='Content' id='Content1'>
        <h1 id='Content-1-txt1-1'>Laundry</h1>
        <h1 id='Content-1-txt1-2'>Service</h1>
        <p id='Content-1-txt2'>Doorstep Washing & Dryclean Service</p>
        <p id='Content-1-txt3'>Don't Have an Account?</p>
        <Link to="/register"><button id='Content-1-btn1'>Register</button></Link>
      </div>
      <div className='Content' id='Content2'>
        <h2 id='Content-2-txt1'>SIGN IN</h2>
        <input type='text' placeholder='  Mobile/Email' value={username} onChange={(e) => setusername(e.target.value)} /><br/>
        <input type='password' placeholder='  Password' value={password} onChange={(e) => setpassword(e.target.value)} />
        <div id="Content-forget">Forget Password?</div>  
        <button id='Content2-btn' onClick={handlelogin}>Sign In</button>
        <br />
      </div>
      </div>
      <LoginFooter/>
    </>
  )
}

export default Login