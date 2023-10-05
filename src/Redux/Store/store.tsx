import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../Features/UserSlice";
import adminSlice from "../Features/adminSlice";




export default configureStore({
    reducer:{
        user:UserSlice,
        admin:adminSlice
    }
})