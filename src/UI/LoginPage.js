import { useSelector } from "react-redux";
import Login from "../user/login";
import Account from "../account/Account";

const LoginPage = ()=>{
    
    
    const {userName} = useSelector((store)=>store.loginData)
    
    return (<>
     {/*   <div className="loginContainer">
    {!userName?<Login/>:<Account/>}
    </div>*/}
   <div className="loginContainer">
   <Account/>
   </div>
    
    
    
    </>)

}
export default LoginPage;