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
import Premiumpage from '../pages/user/Premiumpage';
import PremiumHomepage from '../pages/user/PremiumHomepage';
import PaymentSuccesspage from '../pages/user/PaymentsucessPage';
import Sucesspage from '../pages/user/Sucesspage';



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
        <Route element={<Premiumpage />} path='/premium' />
        <Route element={<PremiumHomepage />} path='/create-subscription' />
        <Route element={<PaymentSuccesspage />} path='/paymentSucess' />
        <Route element={<Sucesspage />} path='/sucess' />
       </Routes>
    )
}

export default UserRouter