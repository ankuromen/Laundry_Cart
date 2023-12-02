import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateOrder from './CreateOrder.js'
import home from '../sidebarassets/home-run (1)@2x.png';
import plus from '../sidebarassets/more@2x.png';
import list from '../sidebarassets/list@2x.png'


const Home = () => {

  let navigate = useNavigate()

  let handlelogout = () => {
    localStorage.clear("token")
    navigate("/Login")
  }
  let [showCreateOrder, setShowCreateOrder] = useState(false);

  let handleCreateOrder = () => {
    setShowCreateOrder(true);
  }
  let handleCloseCreateOrder = () => {
    setShowCreateOrder(false);
  }
  let handleorders=()=>{
    let authtoken = localStorage.getItem("token");
  
    if (authtoken) {
      navigate("/getorders");
    }
  }
  return (
    <>

      <nav>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              LAUNDRY
            </div>
            <div className="nav-elements">
              <button className='button-elements'>Pricing</button>
              <button className='button-elements'>Career</button>
              <button className='button-elements' id='Signin-Button' onClick={handlelogout}>Logout</button>
            </div>
          </div>
        </nav>
      </nav>
      <div className='main'>
        <div className='sidebar'>
          <div className='Sidehome'><img className='Sideimage' src={home} alt="home" /></div>
          <div className='Sidehome'><img className='Sideimage' src={plus} alt='add' /></div>
          <div className='Sidehome' onClick={handleorders}><img className='Sideimage' src={list} alt='list' /></div>
        </div>
        <div className='main-content'>

          {!showCreateOrder && (
            <button id='Create-order-btn' onClick={handleCreateOrder}>Create Order</button>
          )}


          {showCreateOrder && (
            <div>
              {/* Render your Create Order Component */}
              <CreateOrder />
              <button className='Cancel-btn' onClick={handleCloseCreateOrder}>Cancel</button>
            </div>

          )}
        </div>
      </div>

      <div className="CopyR" > 2021 © LAUNDRY</div> 
    </>
  );
}

export default Home

