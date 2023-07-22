import React from 'react';
// import './Aboutwriteone.css';
import { Link, useNavigate } from 'react-router-dom';
import style from"./Aboutwriteone.module.css"

function Aboutwrite() {
  const navigate = useNavigate();

  return (
    <div id={style.homepage_writeone} className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1 md:col-span-2 flex flex-col justify-center items-center m-5">
        <h2 className="serach-banner-title font-black text-3xl md:text-5xl mb-10 tracking-wide">
          Create
          Your Space
        </h2>



        <button

          style={{
            backgroundColor: 'black',
            border: '1px solid',
            borderRadius: '1980px',
            width: '130px',
            color: 'antiquewhite'
          }}
          onClick={() => { navigate('/courses') }}
          className="mb-10"
        >
          Start Writing
        </button>
      </div>

      <div className="border-l-4 border-indigo-500 flex justify-center items-center">
        <div className="w-48 h-48 md:w-72 md:h-72">
          <img src="/images/Blog.png" alt="Blog" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="border-l-4 border-indigo-500 flex justify-center items-center">
        <div className="w-48 h-48 md:w-72 md:h-72">
          <img src="/images/Blog.png" alt="Blog" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Aboutwrite;
