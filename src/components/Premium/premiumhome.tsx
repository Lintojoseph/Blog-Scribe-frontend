import './Premium.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { SiAdguard } from "react-icons/si";
import { subscription, verifypayment } from '../../services/userApi';
// const MONTHLY_PRICEID: string | undefined = import.meta.env.REACT_APP_MONTHLY_PRICEID;
const monthlyPriceId:string ='50';
// const ANNUAL_PRICE_ID: string | undefined = import.meta.env.REACT_APP_ANNUAL_PRICE_ID;
const annualPriceId:string ='500';
import useRazorpay from "react-razorpay";

function Premiumhome() {
    const [loading, setLoading] = useState<boolean>(false);
    const [annualLoading, setAnnualLoading] = useState(false)
    const [monthlyLoading, setMonthlyLoading] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
    const [orderId, setOrderId] = useState(null);
    const [Razorpay] = useRazorpay();
    const navigate=useNavigate()

    console.log('monthlyPriceId:', monthlyPriceId);
    console.log('annualPriceId:', annualPriceId);

    const handleSelectPlan = (planId: string, setLoadingFunc: React.Dispatch<React.SetStateAction<boolean>>) => {
        setSelectedPlan(planId);
        setLoadingFunc(false); // Assuming you want to disable loading for the selected plan
    };
    const handlePayment = async () => { 

        console.log('selectedPlan:', selectedPlan);
        console.log('loading:', loading);
    
        if (!selectedPlan || loading) {
            console.log('Payment aborted. Either selectedPlan is null or loading is true.');
            return;
        }
    try {
        setLoading(true);
        const response = await subscription({
            plan: selectedPlan,
        });

        console.log('Response:', response);
        const orderId= response.data?.data?.id;

        if (orderId !== undefined) {
            console.log('Order ID:', orderId);
        } else {
            console.log('Order ID is undefined or not present in the response.');
        }

            // Now, you can initiate the Razorpay payment
            const options = {
                key: 'rzp_test_YiKG6J90MkCSY2',
                amount: response.data.amount >= 100 ? response.data.amount : 100,
                currency: 'INR',
                name: 'BlogScribe',
                description: 'Subscription Payment',
                order_id: orderId,
                handler: (response:any) => {
                    console.log('Razorpay Handler Response:', response);
            
                    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, plan, amount, user } = response;
                    console.log('Razorpay Payment ID:', razorpay_payment_id);
                    console.log('Razorpay Order ID:', razorpay_order_id);
                    console.log('Razorpay Signature:', razorpay_signature);
                    console.log('Plan:', plan);
                    console.log('Amount:', amount);
                    console.log('User:', user);
            
                    // Verify payment
                    verifypayment({
                        razorpay_order_id,
                        razorpay_payment_id,
                        razorpay_signature,
                        plan,
                        amount: String(amount),
                        user,
                    }).then((verifyResponse) => {
                        console.log('Verify Response:', verifyResponse);
            
                        if (verifyResponse.data.success) {
                            navigate('/paymentSucess');
                        } else {
                            console.log('Payment verification failed.');
                        }
                    }).catch((verifyError) => {
                        console.error('Error verifying payment:', verifyError);
                    });
                },
                prefill: {
                    name: 'Blogscribe',
                    email: 'lintojoseph2097@gmail.com',
                    contact: '1234567890',
                },
                notes: {
                    address: 'public service',
                },
            };
            

            const rzp = new Razorpay(options);
            console.log(rzp,'rrrr')
            rzp.open();
        } catch (error) {
            console.error('Error creating subscription:', error);
            // Handle error
        }finally {
            setLoading(false); // Reset loading state after payment is done
        }
    };


    return (

        <div className="plan_container mt-36">

            <div className="plan_heading">
                <span>Get unlimited access to Everything on BlogScribe</span>
            </div>
            <div className="plan_description">
                <span><SiAdguard /> Plans starting at less than Rs.20/week. </span>
                <span><SiAdguard /> Premium Badge. </span>
                <span><SiAdguard /> Cancel anytime. </span>
                <span><SiAdguard /> No ads </span>
                <span><SiAdguard /> Support quality writing </span>
                <span><SiAdguard /> Monetize your own Articles</span>
            </div>



            <div className="plan_plans">
                <div className="plan_monthly bg-gray-400">
                    <div className="plan_m_title">Monthly</div>
                    <div className="plan_m_price">Rs. 50/month</div>
                    <input type="radio" name="plan" value={String(monthlyPriceId)} onChange={() => handleSelectPlan(monthlyPriceId, setMonthlyLoading)} disabled={loading}checked={selectedPlan === monthlyPriceId} />
                </div>
                <div className="plan_monthly bg-gray-400">
                    <div className="plan_m_title">Annual</div>
                    <div className="plan_m_price">Rs. 500/year</div>
                    <input type="radio" name="plan" value={String(annualPriceId)} onChange={() => handleSelectPlan(annualPriceId, setAnnualLoading)} disabled={loading}checked={selectedPlan === annualPriceId} />
                </div>




                <div className="plan_pay_button_container">
                    <button className='ring ring-red-500 bg-red-600' onClick={handlePayment}>
                        Pay Now
                    </button>

                </div >
            </div>


        </div>

    )
}

export default Premiumhome 