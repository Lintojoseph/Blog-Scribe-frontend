
import axiosInstance from '../axios/axios'

interface userSignup{
    firstname:string
    email:string
    password:string
    confirmpassword:string
}


//signup

export const userSignup=(values:userSignup)=>{
    console.log(values,'hiiiii')
    return axiosInstance('JwtToken').post('/signup',{...values})
    
}

//verify otp
export const verifyOtp=(data:any)=>{
    return axiosInstance('JwtToken').post("/otp", data)
}

// login

export const userLogin=(loginData:any)=>{
    return axiosInstance('JwtToken').post('/login',{...loginData,})
}
// write
export const writeBlog=(data:any)=>{
    return axiosInstance('JwtToken').post('/write',{...data})
}

// display

export const articleBlog=()=>{
    return axiosInstance('JwtToken').get('/articles')
}