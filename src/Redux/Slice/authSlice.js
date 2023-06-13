import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { register, login, logout } from "../../Api/auth";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (dataForm) => {
    const { data } = await login(dataForm)
    data && Cookies.set('token',data.token)
    return data;
  }
  );

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async () => {
    const { data } = await logout()
    data && Cookies.remove('token')
    return data;
  }
  );

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (dataForm) => {
    const { data } = await register(dataForm)
    return data;
  }
  );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    success:false,
    user:{},
    message:"",
    token:"",
  },
  reducers:{
    clearError: (state,action)=>{
      state.error =action.payload;
  }
  },
  extraReducers: (builder) => { 

    //login
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = false;
      state.error = ""
    });
    builder.addCase(loginUser.rejected, (state,action) => {
      state.loading = false;
      state.user={};
      state.error = "Login Fail"
    });

    //logout
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {};
      state.token="";
      
    });

    //signup
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
      state.error="SignUp Fail"
    });

  }

});
export const {clearError} = authSlice.actions
export default authSlice.reducer;