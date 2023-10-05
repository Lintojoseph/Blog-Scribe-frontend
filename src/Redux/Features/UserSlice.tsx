import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  id: string;
  email: string;
  image: string;
  token: string;
}

const initialState: UserState = {
  name: "",
  id: "",
  email: "",
  image: "",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserState>) => {
      const { name, id, email, image, token } = action.payload;
      state.name = name;
      state.id = id;
      state.email = email;
      state.image = image;
      state.token = token;
    },
    setSignoutState: (state) => {
      state.name = "";
      state.id = "";
      state.email = "";
      state.image = "";
      state.token = "";
    },
  },
});

export const { setUserDetails, setSignoutState } = userSlice.actions;

export default userSlice.reducer;
