import { useSelector } from "react-redux";
import Login from "../user/login";
import HomePage from "../account/HomePage";

const LoginPage = ()=>{
    
    
    const {userName} = useSelector((store)=>store.loginData)
    
    return (<>
    <div className="loginContainer">
    {!userName?<Login/>:<HomePage/>}
    </div>
    
    
    
    </>)

}
export default LoginPage;