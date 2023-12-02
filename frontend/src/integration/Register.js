import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoginTopBar from '../Pages/LoginTopBar';
import LoginFooter from '../Pages/LoginFooter';

const Register = () => {
  let [Rname, setRname] = useState("");
  let [Remail, setemail] = useState("");
  let [Rphone, setRphone] = useState("");
  let [Rstate, setRstate] = useState("");
  let [Rdistrict, setRdistrict] = useState("");
  let [Raddress, setRaddress] = useState("");
  let [Rpincode, setRpincode] = useState("");
  let [Rpassword, setRpassword] = useState("");
  let [RCpassword, setRCpassword] = useState("");

  const navigate = useNavigate()
  useEffect(() => {
    let authtoken = localStorage.getItem("token")
    if (authtoken) {
      navigate("/home")
    }
  }, [navigate])
  let handleregister = (e) => {
    if (!Rname || !Remail || !Rphone || !Rstate || !Rdistrict || !Raddress || !Rpincode || !Rpassword || !RCpassword) {
      return alert("Feilds are required")
    }
    else if (Rpassword !== RCpassword) {
      return alert("Password does not match")
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": Rname,
      "email": Remail,
      "phone": Rphone,
      "state": Rstate,
      "district": Rdistrict,
      "address": Raddress,
      "pincode": Rpincode,
      "password": Rpassword,
      "confirmpassword": RCpassword
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://laundry-cart-api.vercel.app/register", requestOptions)
      .then(response => response.json())
      .then(result => { console.log(result); })
      .catch(error => console.log('error', error));
    navigate("/login");
    alert("User Registered Successfully")
  }

  return (
    <>
      <LoginTopBar />
      <div className="Regiter-Container">
        <div className='Regiter-Container1'>
          <section>
            <h1 id='Main-txt'>Laundry Service</h1>
            <p id='Sub-main-txt'>Doorstep Wash & Dryclean Service</p>
            
            <p id='footer-maintxt'>Already Have an Account?</p>
            <Link to="/login"><button id='Register-btn-main-txt' >Sign In</button></Link>
          </section>
        </div>

        <div className='Regiter-Container2'>
          <section>
            <h1 id="Regieter-txt">REGISTER</h1>
            <span>
              <input className='Regiter-input' type='text' placeholder='Full Name' value={Rname} onChange={(e) => setRname(e.target.value)} />
              <input className='Regiter-input' type='text' placeholder='Email' value={Remail} onChange={(e) => setemail(e.target.value)} />
            </span>
            <span>
              <input type='text' className='Regiter-input' placeholder='Phone' value={Rphone} onChange={(e) => setRphone(e.target.value)} />
              <input type='text' className='Regiter-input' placeholder='State' value={Rstate} onChange={(e) => setRstate(e.target.value)} />
            </span>

            <span>
              <input type='text' className='Regiter-input' placeholder='District' value={Rdistrict} onChange={(e) => setRdistrict(e.target.value)} />
              <input type='text' className='Regiter-input' placeholder='Address' value={Raddress} onChange={(e) => setRaddress(e.target.value)} />
            </span>
            <span>
              <input type='Number' className='Regiter-input' placeholder='Pincode' value={Rpincode} onChange={(e) => setRpincode(e.target.value)} />
              <input type='password' className='Regiter-input' placeholder='Password' value={Rpassword} onChange={(e) => setRpassword(e.target.value)} />
            </span>
            <span>
              <input type='password' className='Regiter-input' placeholder='Confirm Password' value={RCpassword} onChange={(e) => setRCpassword(e.target.value)} />
            </span>
          </section>
          <span className='terms-span'>
            <input type='checkbox' id="Terms-checkbox" />
            <p id='Terms-txt'>I agree to Terms & Condition receiving marketing and promotional materials</p>
          </span>

          <button id="Register-Component-btn" onClick={handleregister}>Register</button>
        </div>
      </div>

      <LoginFooter />
    </>

  )
}

export default Register
