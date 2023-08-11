import React, { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { verifyOtp } from '../../services/userApi';

function Otp(): JSX.Element {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));

  const navigate = useNavigate();

  useEffect(() => {
    // Set focus to the first input field on initial load
    const firstInput = document.getElementById('otp-0');
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    setOtp((prevOtp) =>
      prevOtp.map((d, indx) => (indx === index ? element.value : d))
    );
    if (element.nextSibling) {
      const nextInput = element.nextSibling as HTMLInputElement;
      nextInput.focus();
    }
  };

  


const handleSubmit = async () => {
    const otpString: string = otp.join('');

    if (otp.length < 4 || otpString === '') {
        Swal.fire('Invalid entry');
    } else {
        try {
            const response = await verifyOtp({ otp: otpString});

            // Assuming the verifyOtp response has a 'success' property of type 'boolean'
            if (response.data.success) {
                Swal.fire(response.data.message);
                navigate('/login');
            } else {
                Swal.fire(response.data.message);
                navigate('/register');
            }
        } catch (error) {
            // Handle any errors that might occur during the API call
            Swal.fire('An error occurred');
        }
    }
};


  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Enter the OTP for Registration</h2>
          {otp.map((data, index) => (
            <input
              className="border border-gray-300 rounded w-10 h-10 mx-1 px-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="otp"
              maxLength={1}
              key={index}
              value={data}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
          <p>OTP Entered: {otp.join('')}</p>
          <p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
              onClick={handleSubmit}
            >
              Verify OTP
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Otp;
