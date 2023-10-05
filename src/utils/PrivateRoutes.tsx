// import React, { useEffect, useState } from 'react';
// import { Navigate, useNavigate, Outlet } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import authAdmin from '../services/adminApi';
// import { authUser } from '../services/userApi';
// import { setUserDetails } from '../Redux/Features/UserSlice';
// import { useDispatch } from 'react-redux';

// interface PrivateRoutesProps {
//   role: 'user' | 'admin';
//   route: string;
// }

// function PrivateRoutes({ role, route }: PrivateRoutesProps): JSX.Element | null {
//   const dispatch = useDispatch();
//   const [auth, setAuth] = useState<boolean | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (role === 'user') {
//       authUser()
//         .then((response: any) => {
//           if (response.data.status === false) {
//             localStorage.removeItem('JwtToken');
//             dispatch(
//               setUserDetails({
//                 name: '',
//                 id: '',
//                 email: '',
//                 image: '',
//                 token: '',
//               })
//             );
//             setAuth(response.data?.status);
//           }
//           setAuth(response.data?.status);
//         })
//         .catch((error: any) => {
//           toast.error(error.message, { position: 'top-center' });
//           setAuth(false); // Assuming error means not authenticated
//           navigate('/');
//         });
//     } else if (role === 'admin') {
//       authAdmin
//         .authAdmin()
//         .then((response: any) => {
//           setAuth(response.data?.status);
//         })
//         .catch((error: any) => {
//           toast.error(error.message, { position: 'top-center' });
//           setAuth(false); // Assuming error means not authenticated
//           navigate('/admin');
//         });
//     }
//   }, [role, dispatch, navigate]);

//   if (auth === null) return null;

//   return auth ? <Outlet /> :React.createElement(Navigate, { to: route })
// }

// export default PrivateRoutes;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { authAdmin } from "../services/adminApi";
import { toast } from 'react-toastify';
import { authUser } from '../services/userApi';
import { setUserDetails } from '../Redux/Features/UserSlice';
import { setAdminDetails, adminlogout } from "../Redux/Features/adminSlice";


interface PrivateRoutesProps {
  role: 'user' | 'admin';
  route: string;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ role, route }) => {
  const [auth, setAuth] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (role === 'user') {

      authUser()
        .then((response: any) => {
          if (response.data.status === false) {
            localStorage.removeItem('JwtToken');
            dispatch(
              setUserDetails({
                name: '',
                id: '',
                email: '',
                image: '',
                token: '',
              })
            );
            setAuth(response.data?.status);
          }
          setAuth(response.data?.status);
        })
        .catch((error: any) => {
          toast.error(error.message, { position: 'top-center' });
          setAuth(false); // Assuming error means not authenticated
          navigate('/');
        });
    } else if (role === 'admin') {
      authAdmin()
        .then((resp: any) => {
          if (!resp.data.auth) {
            localStorage.removeItem('adminJwtToken');
            dispatch(adminlogout());
          } else if (resp.data.auth) {
            dispatch(setAdminDetails(resp.data.result));
          }
          setAuth(resp.data.auth);
        })
        .catch((error: any) => {
          toast.error(error.message, { position: 'top-center' });
          console.error(error);
          setAuth(error.response?.data?.auth);
          navigate('/admin/login');
        });
    }
  }, [dispatch, navigate, role]);

  if (auth === null) return null;

  return auth ? <Outlet /> : <Navigate to={route} />;
};

export default PrivateRoutes;