import { useSelector } from "react-redux";
import Login from "../user/login";

const LoginPage = ()=>{
    
    const loginData = useSelector((store)=>store.loginData)
    console.log(loginData)

    return (<>
    <Login/>
    </>)

}
export default LoginPage;