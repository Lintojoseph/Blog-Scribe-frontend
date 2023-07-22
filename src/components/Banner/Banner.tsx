import React from 'react';
import './Banner.css';

import { Link, useNavigate } from 'react-router-dom';

function Banner(){
    const navigate = useNavigate();
    return(
        <div className='homepage-banner grid sm:grind-cols-1 md:grid-cols-3 '>
            <div className='col-span-2 h-full flex flex-col justify-center m-5 md:ml-14'>
                <div>
                    <h2 className="serach-banner-title font-black text-3xl md:text-5xl mb-10  tracking-wide">
                    Expand your horizons and embrace the joy of discovery <br />
                    Stay curious!

                    </h2>
                </div>
                <div className='mb-10 tracking-wide'>
                    <p className='text-xs sm:text-base sm:leading-5 md:leading-6'>Discover stories, thinking, and expertise from writers on any topic.</p>
                </div>
                <div onClick={() => { navigate('/courses') }} className='mb-10'>

                    <button style={{backgroundColor:'black',border:'1px solid',borderRadius:'1980px',width:'130px',color:'antiquewhite'}}>
                        Start Reading
                    </button>
                </div>
            </div>
            {/* <div className='col-span-1 flex justify-center items-center'>
                <div className="max-w-md mx-auto hidden lg:inline-block">
                    <Fade bottom>
                        <div className=" banner-serach-bar relative flex items-center  h-14 border-white rounded-full focus-within:shadow-lg bg-white overflow-hidden">
                            <div className="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <Link to={'/search'}>
                                <input style={{ '--tw-ring-color': '#fff' }} readOnly className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 focus:border-white border-white" type="text" id="search" placeholder="Search Course.." />
                            </Link>
                        </div>
                    </Fade>

                </div>

            </div> */}
        </div>

    )
}

export default Banner