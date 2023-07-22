import React from 'react';
import LandingPage from '../pages/user/Landingpage';
import { Routes,Route } from 'react-router-dom';
import Aboutwritepage from '../pages/user/Aboutwritepage';
import SignupPage from '../pages/user/SignupPage';
import Loginpage from '../pages/user/Loginpage';
import Homepage from '../pages/user/Homepage';



function UserRouter(){
    return(
       <Routes>
        <Route element={<LandingPage />} path='/' />
        <Route element={<Aboutwritepage />} path='/aboutwrite' />
        <Route element={<SignupPage />} path='/signup' />
        <Route element={<Loginpage />} path='/login' />
        <Route element={<Homepage />} path='/home' />
       </Routes>
    )
}

export default UserRouter