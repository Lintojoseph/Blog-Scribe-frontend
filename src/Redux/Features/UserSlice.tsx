import { createSlice,PayloadAction } from "@reduxjs/toolkit"



interface userState{
    name:string
    id:string
    email:string
    image:string
    token:string
}

const initialState:userState={
    name:'',
    id:'',
    email:'',
    image:'',
    token:''
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action:PayloadAction<userState>)=>{

            const{name,id,email,image,token}=action.payload;
            state.name=name
            state.id=id
            state.email=email
            state.image=image
            state.token=token

        }
    }
})

export const {setUserDetails}=userSlice.actions

export default userSlice.reducer