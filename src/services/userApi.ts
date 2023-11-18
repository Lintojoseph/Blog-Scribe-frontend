
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
export const writeBlog = async (data: any) => {
    try {
      const response = await axiosInstance('JwtToken').post('/write', { ...data }, { headers: { "Content-Type": "multipart/form-data" } });
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };
  

// display

export const articleBlog=()=>{
    return axiosInstance('JwtToken').get('/articles')
}

// categories

export const categories=()=>{
  return axiosInstance('JwtToken').get('/category')
}

export const userArticle=(id:string)=>{
  return axiosInstance('JwtToken').get(`/article/${id}`)
}

export const userProfile=()=>{
  return axiosInstance('JwtToken').get('/profile')
}

export const createlike=(id:string)=>{
  return axiosInstance('JwtToken').put(`/like/${id}`)
}

export const getLike=()=>{
  return axiosInstance('JwtToken').get('/like/:id')
}

export const Editarticle=(articleId:any)=>{
  return axiosInstance('JwtToken').get(`/edit-article/${articleId}`)
}

export const updateArticle=(data:any)=>{
  return axiosInstance('JwtToken').put('/update-article',data,{ headers: { "Content-Type": "multipart/form-data" } })
}

export const DeleteArticle=(articleId:any)=>{
  return axiosInstance('JwtToken').put(`/delete-article/${articleId}`)
}
export const authUser = () => {
  return axiosInstance("JwtToken").get('/user-authenticate')
}

export const subscription=(data:any)=>{
  return axiosInstance('JwtToken').post('/create-subscription',data)
}

export const verifypayment=(data:any)=>{
  return axiosInstance('JwtToken').post('/verifypayment',data)
}

export const addComment=(postData: any)=>{
  return axiosInstance('JwtToken').put(`/comment/${postData.id}`,postData)
}
