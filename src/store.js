import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk"
import loginReducer from "./user/loginslice";
import accountReducer from "./account/accounSlice";

const rootReducer = combineReducers({
    loginData:loginReducer,
    account:accountReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store;