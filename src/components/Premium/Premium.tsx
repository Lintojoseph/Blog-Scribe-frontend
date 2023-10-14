import './Premium.css';
import ButtonLoading from '../Shimmer/ButtonLoading/ButtonLoading';
import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
const MONTHLY_PRICEID=import.meta.env.MONTHLY_PRICEID
const ANNUAL_PRICE_ID=import.meta.env.ANNUAL_PRICE_ID
import { SiAdguard } from "react-icons/si";

function Premium() {
  const [annualLoading, setAnnualLoading] = useState(false);
  const [monthlyLoading, setMonthlyLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate=useNavigate()

  // const handlePayment = () => {
  //   // Handle payment logic here
  // };

  // const handleSelectPlan = () => {
  //   // Handle plan selection logic here
  // };

  return (
    <div className="plan_container">
      <div className="plan_logo">
        <img  src="{fullLogo}" alt="Logo" />
      </div>
      <div className="plan_heading">
        <span>Get unlimited access to Everything on BlogScribe</span>
      </div>
      <div className="plan_description">
        <span>
          <SiAdguard /> Plans starting at less than Rs.20/week.{' '}
        </span>
        <span>
          <SiAdguard /> Premium Badge.{' '}
        </span>
        <span>
          <SiAdguard /> Cancel anytime.{' '}
        </span>
        <span>
          <SiAdguard /> No ads{' '}
        </span>
        <span>
          <SiAdguard /> Support quality writing{' '}
        </span>
        <span>
          <SiAdguard /> Monetize your own Articles
        </span>
      </div>

      {/* <div className="plan_plans">
        {isLoggedIn ? (
          <>
            <div className="plan_monthly">
              <div className="plan_m_title">Monthly</div>
              <div className="plan_m_price">Rs. 50/month</div>
              <button onClick={() => handleSelectPlan(MONTHLY_PRICEID)}>
                {monthlyLoading ? <ButtonLoading /> : 'Select'}
              </button>
            </div>
            <div className="plan_monthly">
              <div className="plan_m_title">Annual</div>
              <div className="plan_m_price">Rs. 500/year</div>
              <button onClick={() => handleSelectPlan(ANNUAL_PRICE_ID)}>
                {annualLoading ? <ButtonLoading /> : 'Select'}
              </button>
            </div>
            <div className="plan_pay_button_container">
              <button onClick={handlePayment}>Pay Now</button>
            </div>
          </>
        ) : (
          <button className='text-red-600' onClick={() => navigate('/login')}>Login to Subscribe</button>
        )}
      </div> */}
    </div>
  );
}

export default Premium;
