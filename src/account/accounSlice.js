const initialState = {
    balance : 0,
    error:''
}

export default function accountReducer(state=initialState,action){
    switch(action.type){
        case "deposit":{
            return {...state,balance:state.balance+action.payload}
        }
        case "withdraw":{
            if(state.balance < action.payload){
                return {...state,balance:state.balance,error:"you dont have sufficient Balance for this Transcation"}
            }else {
                return {...state,balance:state.balance - action.payload,error:''}
            }
            
        }
        default:{
            return state;
        }
    }
}

export function handleDeposit(amount){
   return {type:'deposit',payload:amount}
}

export function handleWidthdraw(amount){
   
    return {type:'withdraw',payload:amount}
}