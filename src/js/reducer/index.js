import { combineReducers } from "redux"
import UserReducer from "./UserReducer"
import PdfReducer from "./PdfReducer"


const rootReducer = combineReducers({ 
    UserReducer,
    PdfReducer
})



export default rootReducer