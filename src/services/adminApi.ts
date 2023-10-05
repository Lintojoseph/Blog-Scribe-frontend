import axiosInstance from '../axios/axios';

// export const authAdmin = () => {
//     return axiosInstance("adminJwtToken").get('/isAdminAuth');
// }
export const adminLogin = (data:any)=>{
    return axiosInstance("adminJwtToken").post("/admin/login", data)
}

export const getdetailsDashboard=()=>{
    return axiosInstance("adminJwtToken").get('/admin/dashboard')
}

export const getusers=()=>{
    return axiosInstance("adminJwtToken").get('/admin/users')
}

export const blockusers=(userId:any)=>{
    return axiosInstance('adminJwtToken').get(`/admin/block-user/${userId}`)
}

export const unblockusers=(userId:any)=>{
    return axiosInstance('adminJwtToken').get(`/admin/unblock-user/${userId}`)
}

export const getAllArticles=(page:any)=>{
    return axiosInstance('adminJwtToken').get(`/admin/articles?model=${"blogmodel"}&page=${page}&limit=${10}`)
}

export const getstatics=()=>{
    return axiosInstance('adminJwtToken').get('/admin/statics')
}



