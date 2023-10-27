import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { dealerAuth } from '../../firebase'
import "./Login.css"
const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const UserCredentials=await signInWithEmailAndPassword(dealerAuth,email,password);
            console.log("User successfully logged in",UserCredentials);
            alert("Logged in");
            navigate("/Home");
        } 
        catch (error) {
            alert("Error:"+error.message);
        }
    }
    
  return (
    <div>
    <div className='Retailer'>
        <div className='text'>Retailer</div>
        <div className='login4'><div className='login4text'>Login</div></div>
        <div className='donthaveac'>Don't have an account?</div>
        <div className='donthaveac' id="dha2" ><Link to='/SignUp'className='RegisterL'>Register</Link></div>
        
    </div>
    <div class="logincontainer2">
        <form className='form1' onSubmit={handleSubmit}>
            <p className="hea"><div className='loginGroup9'></div></p>
            <div className='Dealerh'>Dealer</div>
            <input className="email" type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
            <input className='password' type="Password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
            <p><Link className='link' to='/ForgotPassword'> Forgot Password?</Link></p>
            <input type="Submit" value="Login" className='NewLogin' ></input>
            
            
        </form>
        
    </div>
    </div>
  )
}

export default Login

/*

<p>Don't have an account?</p>
            <button ><Link to='/SignUp'className='btn'>Sign Up</Link></button>
*/