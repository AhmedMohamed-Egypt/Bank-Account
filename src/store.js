import { combineReducers, createStore } from "redux";
import loginReducer from "./user/loginslice";
import accountReducer from "./account/accounSlice";

const rootReducer = combineReducers({
    loginData:loginReducer,
    account:accountReducer
})

const store = createStore(rootReducer)

export default store;