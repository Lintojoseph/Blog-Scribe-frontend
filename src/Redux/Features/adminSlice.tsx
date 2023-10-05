import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AdminState {
//   id: string;
//   login: string;
//   token: string;
// }

// const initialState: AdminState = {
//   id: '',
//   login: '',
//   token: '',
// };

// const adminSlice = createSlice({
//   name: 'admin',
//   initialState,
//   reducers: {
//     setAdminDetails: (state, action: PayloadAction<{ id: string; login: string; token: string }>) => {
//       state.id = action.payload.id;
//       state.login = action.payload.login;
//       state.token = action.payload.token;
//     },
//     setAdminSignoutState: (state) => {
//       state.id = '';
//       state.login = '';
//       state.token = '';
//     },
//   },
// });

// export const { setAdminSignoutState, setAdminDetails } = adminSlice.actions;

// export default adminSlice.reducer;


interface AdminState {
  name: string;
  email: string;
  token: string;
  isAdminAuth: boolean; // Add this property to represent admin authentication
}

const initialState: AdminState = {
  name: '',
  email: '',
  token: '',
  isAdminAuth: false, // Initialize isAdminAuth as false
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdminDetails: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    adminLogin: (state) => {
      state.isAdminAuth = true;
    },
    adminlogout: (state) => {
      state.isAdminAuth = false;
    },
  },
});



export const { setAdminDetails, adminLogin, adminlogout } = adminSlice.actions;
export default adminSlice.reducer;
