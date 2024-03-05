import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoan, handleDeposit, handleWidthdraw, removeError } from "./accounSlice";
import ErrorBank from "../errors/ErrorBank";
import Modal from "../modal/Modal";




const Account=()=>{
    const [deposit,setDeposit] = useState("")
    const [withdraw,setWithdraw] = useState("")
    const [loan,setLoan] = useState("")
    const [showModal,setShowModal] = useState(false)
    const {balance,error,transactionsHistory} = useSelector((store)=>store.account)
    const transactionsStatus = transactionsHistory.length>0?true:false
   const dispatch = useDispatch()
  const depositBalance = ()=>{
    dispatch(handleDeposit(deposit))
    setDeposit('')
  }
  const withdrawBalance = ()=>{
    dispatch(handleWidthdraw(withdraw))
    setWithdraw('')
  }
  const handleLoan = ()=>{
   dispatch(getLoan(loan))
   setLoan("")
  }
  useEffect(()=>{

   setTimeout(() => {
    if(error.length > 0){
       dispatch(removeError())
    }
   }, 3000);
  })


    return (
        
        <div className="account">
         
         {transactionsStatus&&<button onClick = {()=>{setShowModal(true)}} className="viewTransacationsBtn">View Transacations</button>}
         {showModal && <>
            <Modal childClass="contentTransacations" onClick={()=>{setShowModal(false)}}>
                <button className="closeBtn" onClick={()=>{setShowModal(false)}}>X</button>
               <ul className={`${transactionsHistory.length>5?'scrolling':''}`}>
               {transactionsHistory.map((item,index)=><li className={`${item.classStatus}`} key={index}>{item.transacation}</li>)}
               </ul>
               
            </Modal>
         </>}
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
            <div className="d-flex align-items-center widthdraw getloan">
               <div>
               <label>Get Loan</label>
                <input type="text" placeholder="Get a Loan from bank" value={loan} onChange={(e)=>{setLoan(+e.target.value)}}/>
               </div>
               <button onClick={handleLoan}>Get a Loan</button>
            </div>
         </div>

        </div>
    )
}

export default Account;