import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userLogin } from '../../services/userApi';
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from '../../Redux/Features/UserSlice';
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2';


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[loginData,setLogindata]=useState({email:'',password:''})

    const handlechange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setLogindata({...loginData,[name]:value})
    }
    const generateError = (err:any) => {
        toast.error(err, {
            position: "top-center",
        });
    };

     //user login
     const handleSubmit = async () => {
        try {
            const { data } = await userLogin(loginData);
            if (data) {
                if (data.status === 'Blocked') {
                    navigate('/account/suspended')
                }
                if (data.login) {
                    localStorage.setItem('JwtToken', data.token);
                    dispatch(
                        setUserDetails({
                            name: data.user.firstName,
                            id: data.user._id,
                            email: data.user.email,
                            image: data.user.picture,
                            token: data.token,
                        })
                    );
                    navigate("/home");
                } else {
                    if (data.message === "Incorrect password") {
                        Swal.fire("Incorrect password. Please try again.");
                      } else {
                        generateError(data.message);
                      }
                }
            } else {
                generateError("Error")
            }
        } catch (error) {
            generateError((error as Error).message);
        }
    }


    return (
        <section className="section-box">
            <form>
                <div className="grid-cols-1 shadow-none sm:shadow-xl form-box p-10">
                    <h2 className="text-center text-2xl font-medium pb-8">Login</h2>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-orange-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                            id="email"
                            style={{ color: "black" }}
                            name='email'
                            value={loginData.email}
                            onChange={handlechange}


                            placeholder="Email address" />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-orange-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200  dark:placeholder:text-violet-900  input-box-border"
                            id="password"
                            style={{ color: "black" }}
                            name='password'
                            value={loginData.password}
                            onChange={handlechange}


                            placeholder="Password" />
                    </div>
                    <div className="text-center ">
                        <button className='form-btn mt-2 font-medium rounded' onClick={handleSubmit}

                            type="button">
                            Login
                        </button>
                        <div>
                            <div className='flex justify-center success-box-border rounded mt-8'
                                // onClick={login}
                            >
                                <img src="/images/Screenshot 2023-07-21 104401.png" alt="" style={{maxWidth:'5%',height:'auto'}} />
                                <p className='ml-4'>Google</p>
                            </div>

                            <Link to={'/signup'}>
                                <p className="mt-4 mb-0 pt-1 text-sm ">
                                    Don't have an account ?
                                    <a
                                        href="#!"
                                        className="text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    > Register</a>
                                </p>
                            </Link>
                        </div>
                    </div>

                </div>
            </form>
        </section>

    )
}
export default Login