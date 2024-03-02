const initailLogin = {
    userName:"",
    error:""
}

export default function loginReducer(state=initailLogin,action){

  switch(action.type){

    case "submit/login":{
        if(action.payload===''){
          return {...state,userName:action.payload,error:"there is an error"}
        }
        return {...state,userName:action.payload,error:""}
       
    }
  

    default :{
        return state
    }
  }
}

export function handleLogin(username){

  return {type:"submit/login",payload:username}

    
}