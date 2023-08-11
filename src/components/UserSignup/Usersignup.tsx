import { useFormik } from "formik"
import './UserSignup.css'
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";
import { userSignup } from "../../services/userApi";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';



interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
  }

  const validate = Yup.object({
    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .required('Password is Required'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is Required ')
});


function Signup() {
    
    const [email, setEmail] = useState('');
    
    const navigate = useNavigate();
    
    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: validate,

        onSubmit:async (values) => {
            
            try {
                // The form is valid (handled by Formik validationSchema), proceed with form submission
                console.log(values.name, values.email, values.password);
        
                // Assuming `userRegister` is a function that makes an API call for user registration
                const response = await userSignup({
                    firstname: values.name,
                    email: values.email,
                    password: values.password,
                    confirmpassword: values.confirmpassword, // Include the confirmpassword field with its value
                  });
        
                
                // setEmail(response.data.email);
        
                
                // navigate("/otp", { state: { email: response.data.email } });
                if (response.data.otpSend) {
                    // Email is not already registered, proceed with user registration
                    const email = response.data.email;
        
                    // Navigate to the "/otp" route with the email passed as state
                    navigate("/otp", { state: { email } });
                } else {
                    // Email is already registered, show an alert to the user
                    Swal.fire("Email is already registered. Please use a different email or log in.");
                }
              } catch (error) {
                console.log(error);
               
              }
            },
          
    

    })
    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name as keyof FormValues;
        formik.setValues((prev: FormValues) => {
          const formfield: FormValues = { ...prev };
          formfield[fieldName] = event.target.value;
          return formfield;
        });
      };
      
    
    return (
        

        <section className="section-box">
            <form onSubmit={formik.handleSubmit}>
                <div className="grid-cols-1 shadow-none sm:shadow-xl form-box p-10">
                    <h2 className="text-center text-2xl font-medium pb-8">Signup</h2>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="name"
                            name="name"
                            onChange={handleChanges}
                            value={formik.values.name}
                            placeholder="First name" />
                        {formik.touched.name && formik.errors.name ? (
                            <div className='text-red-500'>{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="exampleFormControlInput3"
                            name="email"
                            onChange={handleChanges}
                            placeholder="Email address" />
                            {formik.touched.email && formik.errors.email ? (
                <div className='text-red-500' >{formik.errors.email}</div>
              ) : null}
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="exampleFormControlInput4"
                            name="password"
                            onChange={handleChanges}
                            placeholder="Password" />
                            {formik.touched.password && formik.errors.password ? (
                <div className='text-red-500'>{formik.errors.password}</div>
              ) : null}
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="exampleFormControlInput5"
                            name="confirmpassword"
                            onChange={handleChanges}
                            placeholder="confirm password" />
                            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
                <div className='text-red-500'>{formik.errors.confirmpassword}</div>
              ) : null}
                    </div>
                    <div className="text-center">
                        <div><button type="submit"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >
                            sign up
                        </button></div>
                        <div className='flex justify-center success-box-border rounded p-2 mt-8'>
                            <img src="/images/Screenshot 2023-07-21 104401.png" alt="" style={{ maxWidth: '5%', height: 'auto' }} />
                            <p className='ml-4'>Google</p>
                        </div>
                        <Link to={'/login'}>
                            <p className="mt-4 mb-0 pt-1 text-sm ">
                                Already On BlogScribe ?
                                <a
                                    href="#!"
                                    className="text-red-600 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                > Log in</a>
                            </p>
                        </Link>
                    </div>

                </div>
            </form>
        </section>
    

    )
}
export default Signup