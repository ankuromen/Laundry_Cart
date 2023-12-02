import './App.css';
import { useEffect } from 'react';
import { Routes, Route,useNavigate } from "react-router-dom"
import Login from './integration/Login';
import Home from './integration/Home';
import Privatecomponent from './integration/privatecomponent.js';
import Register from './integration/Register';
import Getorders from './integration/Getorders.js';


const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log("port=",BASE_URL);

function App() {
  let navigate=useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        
        <Route element={<Privatecomponent />}>{/*protected routes*/} 

          <Route path="home" element={<Home />} />
          <Route path="getorders" element={<Getorders/>}/>
        
           </Route>

        <Route path="register" element={<Register/>} />{/*non protected routes*/} 
        <Route path="login" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;

