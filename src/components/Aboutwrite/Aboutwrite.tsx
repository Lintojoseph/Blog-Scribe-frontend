import React from 'react';
import './Aboutwrite.css'


import { Link, useNavigate } from 'react-router-dom';

function Aboutwrite() {
    const navigate = useNavigate();
    return (
        <div className='homepage-write grid sm:grind-cols-1 md:grid-cols-3 '>
            <div className='col-span-2 h-full flex flex-col justify-center m-5 md:ml-14'>
                <div>
                    <h2 className="serach-banner-title font-black text-3xl md:text-5xl mb-10  tracking-wide">
                        Publish, grow and earn-<br />
                        where ideas blossom,<br />opportunities flourish

                    </h2>
                </div>
                <div className='mb-10 tracking-wide'>
                    <p className='text-xs sm:text-base sm:leading-5 md:leading-6'>Discover stories, thinking, and expertise from writers on any topic.</p>
                </div>
                <div onClick={() => { navigate('/courses') }} className='mb-10'>

                    <button style={{ backgroundColor: 'black', border: '1px solid', borderRadius: '1980px', width: '130px', color: 'antiquewhite' }}>
                        Start Writing
                    </button>
                </div>
            </div>
            <div className="border-l-4 border-indigo-500 h-3/6">
            <div className='col-span-1 flex justify-center items-center'>
                <div className="max-w-md mx-auto hidden lg:inline-block" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <title>blogscribe</title>
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="blue" fontSize="35" fontWeight="bold">
                            <tspan x="50%" dy="-0.1em">
                                <animate attributeName="fill-opacity" dur="2s" repeatCount="indefinite" values="1;0;1;1;1" />
                                <animate attributeName="x" dur="2s" repeatCount="indefinite" values="50%;55%;50%;45%;50%" />
                                Blog
                            </tspan>
                            <tspan x="50%" dy="1.2em">
                                <animate attributeName="fill-opacity" dur="2s" repeatCount="indefinite" values="1;0;1;1;1" />
                                <animate attributeName="x" dur="2s" repeatCount="indefinite" values="50%;45%;50%;55%;50%" />
                                Scribe
                            </tspan>
                        </text>
                    </svg>
                    {/* <Fade bottom>
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
                    </Fade> */}

                </div>

            </div>
            </div>
        </div>

    )
}

export default Aboutwrite