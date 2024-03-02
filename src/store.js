import { combineReducers, createStore } from "redux";
import loginReducer from "./user/loginslice";

const rootReducer = combineReducers({
    loginData:loginReducer
})

const store = createStore(rootReducer)

export default store;