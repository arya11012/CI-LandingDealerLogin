import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import {Routes,Route} from "react-router-dom";
import React ,{useContext}from 'react';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import LandingPage from './components/LandingPage/LandingPage';
import blank_page from './components/blank_page/blank_page';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path='/blank_page' element={<blank_page/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
