import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeposit, handleWidthdraw } from "./accounSlice";
import ErrorBank from "../errors/ErrorBank";




const Account=()=>{
    const [deposit,setDeposit] = useState("")
    const [withdraw,setWithdraw] = useState("")
    const {balance,error} = useSelector((store)=>store.account)
   const dispatch = useDispatch()
  const depositBalance = ()=>{
    dispatch(handleDeposit(deposit))
    setDeposit('')
  }
  const withdrawBalance = ()=>{
    dispatch(handleWidthdraw(withdraw))
    setWithdraw('')
  }


    return (
        
        <div className="account">
      <ErrorBank errorTxt = {error}/>
         <p className="balance">Balance {balance} USD </p>
         <div>
            <div className="d-flex align-items-center ">
               <div>
               <label>Deposit</label>
                <input type="text" placeholder="Deposit to your balance" value={deposit} onChange={(e)=>setDeposit(+e.target.value)}/>
               </div>
               <button onClick={depositBalance}>Deposit</button>
            </div>
            <div className="d-flex align-items-center widthdraw">
               <div>
               <label>Withdraw</label>
                <input type="text" placeholder="Withdraw from your balance" value={withdraw} onChange={(e)=>{setWithdraw(+e.target.value)}}/>
               </div>
               <button onClick={withdrawBalance}>Withdraw</button>
            </div>
         </div>

        </div>
    )
}

export default Account;