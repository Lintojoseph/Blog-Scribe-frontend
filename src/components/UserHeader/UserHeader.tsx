
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function UserHeader() {
    const [sidebar,setSidebar]=useState<boolean>(false)
    return (
        <div>
            <nav style={{ border: "1px solid #e5e7eb", position: 'fixed', width: '100%', top: '0', left: '0', right: '0' }} className="relative z-50 px-4 py-4 flex justify-between items-center bg-amber-400">
            <div className="lg:hidden" onClick={() => setSidebar(!sidebar)}>
            <button className="navbar-burger flex items-center text-black-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
            </div>

                <div className="container max-auto py-4 px-20">
                    <a href="#">
                        <img src="/images/BLOGSCRIBE.png" width="140px" />
                    </a>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-end lg:w-auto lg:space-x-6">
                    <li>
                        <Link to={'/'}>
                            <p className="text-sm text-black-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" >Our story</p>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <Link to={'/courses'}>
                            <p className="text-sm text-black-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" >Membership</p>
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li>
                        <Link to={'/aboutwrite'}>
                            <p className="text-sm text-black-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" >Write</p>
                        </Link>
                    </li>

                    <li className="text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                    </li>
                    <li><a className="text-sm text-black-400 hover:font-bold focus:text-violet-600 hover:text-violet-600" href="#">Get Premium</a></li>

                </ul>

                <div>
                    

                    <Link to={'/signup'}>
                        <div className="hidden lg:inline-block py-2 px-5 bg-gray-950 hover:bg-green-500 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Get started</div>
                    </Link>
                </div>
            </nav>
            <div className={sidebar ? "navbar-menu relative z-50  " : " navbar-menu relative z-50 hidden"}>
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-4/6 max-w-xs py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <span className="mr-auto text-3xl font-bold leading-none">
                            <img className='w-32' src="/images/BLOGSCRIBE.png" />
                        </span>
                        <button className="navbar-close"
                            onClick={() => {
                                setSidebar(!sidebar)
                            }}
                        >
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link to={'/'}>
                                    <a className="block p-4 text-sm  text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Our Story</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'/courses'}>
                                    <a className="block p-4 text-sm  text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Membership</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'/my-enrollments'}>
                                    <a className="block p-4 text-sm  text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" >Write</a>
                                </Link>
                            </li>
                            <li className="mb-1">
                                <Link to={'/signup'}>
                                    <a className="block p-4 text-sm  text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">Sign in</a>
                                </Link>
                            </li>
                            

                        </ul>
                    </div>


                    {/* {user.id ?
                        <div className="mt-auto absolute left-0 right-0 bottom-0 mx-5">
                            <div className="pt-6">
                                <div className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold  bg-green-400 hover:bg-green-500   rounded-xl" onClick={() => {
                                    localStorage.removeItem('JwtToken');
                                    dispatch(setSignoutState());
                                    navigate('/')
                                }}>Logout</div>
                            </div>
                        </div>
                        :
                        <div className="mt-auto">
                            <div className="pt-6">
                                <Link to={'/login'}>
                                    <div className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</div>
                                </Link>

                                <Link to={'/signup'}>
                                    <div className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold  bg-green-400 hover:bg-green-500   rounded-xl" href="#">Sign Up</div>
                                </Link>
                            </div>

                        </div>
                    } */}
                </nav>
            </div>
        </div>
        
    )
}
export default UserHeader