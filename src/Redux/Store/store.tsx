import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Features/UserSlice";




export default configureStore({
    reducer:{
        user:UserSlice
    }
})