import axios from 'axios'

const axiosInstance=(tokenName:string)=>{
    const Instance = axios.create({
        baseURL:  'http://localhost:5000',
        timeout:12000,
        headers: { 'Content-Type': 'application/json' }
      });
      Instance.interceptors.request.use((request) => {
        const token = localStorage.getItem(tokenName)
        request.headers.Authorization = `Bearer ${token}`
        return request
    })

    // instance response interceptor 
    Instance.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response) {
            return Promise.reject(error.response.data);
          }
          return Promise.reject(error.message || 'An error occurred.');
        }
      );
    
      return Instance;
}
export default axiosInstance;