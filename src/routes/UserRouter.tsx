import React from 'react';
import LandingPage from '../pages/user/Landingpage';
import { Routes,Route } from 'react-router-dom';
import Aboutwritepage from '../pages/user/Aboutwritepage';
import SignupPage from '../pages/user/SignupPage';
import Loginpage from '../pages/user/Loginpage';
import Homepage from '../pages/user/Homepage';
import Writepage from '../pages/user/Writepage';
import OtpPage from '../pages/user/OtpPage';
import Displaypage from '../pages/user/Displaypage';
import Profilepage from '../pages/user/Profile';
import Editarticlepage from '../pages/user/Editarticlepage';



function UserRouter(){
    return(
       <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<Aboutwritepage />} path='/aboutwrite' />
        <Route element={<SignupPage />} path='/signup' />
        <Route element={<Loginpage />} path='/login' />
        <Route element={<Homepage />} path='/home' />
        <Route element={<Writepage />} path='/write' />
        <Route element={<OtpPage />} path='/otp' />
        <Route element={<Displaypage />} path='/article/:id' />
        <Route element={<Profilepage />} path='/profile' />
        <Route element={<Editarticlepage />} path='/write/:articleId' />
       </Routes>
    )
}

export default UserRouter