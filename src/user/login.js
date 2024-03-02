import React, { useState } from "react";
import logo from "../imgs/login.png"
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "./loginslice";

const Login = () => {
    const {error} = useSelector((store)=>store.loginData)
    
    const [user,setUser] = useState("")
    const dispatch = useDispatch()
     const handleClick = ()=>{
       dispatch(handleLogin(user))
       setUser("")
     }
  return <div className="loginContainer">
    <h2>Welcome to Design Community </h2>
  <div className="loginFlex">
  <div>
        {<p className={`error ${error.length>0&&'animate__fadeIn animate__animated '}`} style={{height:'24px'}}>{error}</p>}
        <label>User Name</label>

        <input type = "text" placeholder="User Name" value={user} onChange={(e)=>setUser(e.target.value)}/>
        <button onClick={handleClick}>Log In </button>
    </div>
    <div>
        <img src={logo} alt="logo"/>
    </div>
  </div>
  </div>;
};

export default Login;
