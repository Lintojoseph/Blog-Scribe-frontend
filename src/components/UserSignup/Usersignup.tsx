import { useFormik } from "formik"
import './UserSignup.css'
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';



interface FormValues {
    firstname: string;
    email: string;
    password: string;
    confirmpassword: string;
  }

  const validate = Yup.object({
    firstname: Yup.string()
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
    
    
    const formik = useFormik<FormValues>({
        initialValues: {
            firstname: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: validate,

        onSubmit(values, formikHelpers) {

        },
    

    })
    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(event);
      };
    
    return (

        <section className="section-box">
            <form>
                <div className="grid-cols-1 shadow-none sm:shadow-xl form-box p-10">
                    <h2 className="text-center text-2xl font-medium pb-8">Signup</h2>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="firstname"
                            name="firstname"
                            onChange={handleChanges}
                            value={formik.values.firstname}
                            placeholder="First name" />
                        {formik.touched.firstname && formik.errors.firstname ? (
                            <div className='text-red-500'>{formik.errors.firstname}</div>
                        ) : null}
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="exampleFormControlInput2"
                            name="email"
                            onChange={handleChanges}
                            placeholder="Email address" />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="exampleFormControlInput2"
                            name="password"
                            onChange={handleChanges}
                            placeholder="Password" />
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                        <input
                            type="password"
                            className="peer  block min-h-[auto] w-full rounded border-0 bg-red-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-violet-900  input-box-border"
                            style={{ color: 'black' }}
                            id="exampleFormControlInput2"
                            name="password"
                            onChange={handleChanges}
                            placeholder="confirm password" />
                    </div>
                    <div className="text-center">
                        <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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