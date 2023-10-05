import './Premium.css';
import ButtonLoading from '../Shimmer/ButtonLoading/ButtonLoading';
import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Premium() {
  const [annualLoading, setAnnualLoading] = useState(false);
  const [monthlyLoading, setMonthlyLoading] = useState(false);
  // const isLoggedIn = /* Your logic to check if the user is logged in */;
  const navigate=useNavigate()

  const handlePayment = () => {
    // Handle payment logic here
  };

  const handleSelectPlan = (planId) => {
    // Handle plan selection logic here
  };

  return (
    <div className="plan_container">
      <div className="plan_logo">
        <img onClick={() => navigate()} src="{fullLogo}" alt="Logo" />
      </div>
      <div className="plan_heading">
        <span>Get unlimited access to Everything on BlogScribe</span>
      </div>
      <div className="plan_description">
        <span>
          <img src="{tickIcon}" /> Plans starting at less than Rs.20/week.{' '}
        </span>
        <span>
          <img src="{tickIcon}" /> Premium Badge.{' '}
        </span>
        <span>
          <img src="{tickIcon}" /> Cancel anytime.{' '}
        </span>
        <span>
          <img src="{tickIcon}" /> No ads{' '}
        </span>
        <span>
          <img src="{tickIcon}" /> Support quality writing{' '}
        </span>
        <span>
          <img src="{tickIcon}" /> Monetize your own Articles
        </span>
      </div>

      <div className="plan_plans">
        {isLoggedIn ? (
          <>
            <div className="plan_monthly">
              <div className="plan_m_title">Monthly</div>
              <div className="plan_m_price">Rs. 50/month</div>
              <button onClick={() => handleSelectPlan(VITE_MONTHLY_PRICE_ID)}>
                {monthlyLoading ? <ButtonLoading /> : 'Select'}
              </button>
            </div>
            <div className="plan_monthly">
              <div className="plan_m_title">Annual</div>
              <div className="plan_m_price">Rs. 500/year</div>
              <button onClick={() => handleSelectPlan(VITE_ANNUAL_PRICE_ID)}>
                {annualLoading ? <ButtonLoading /> : 'Select'}
              </button>
            </div>
            <div className="plan_pay_button_container">
              <button onClick={handlePayment}>Pay Now</button>
            </div>
          </>
        ) : (
          <button onClick={() => navigate('/login')}>Login to Subscribe</button>
        )}
      </div>
    </div>
  );
}

export default Premium;
