import { createSlice } from "@reduxjs/toolkit";


const groupSlice = createSlice({
  name: "group",
  initialState: {
    loading: false,
    success:false,
    grouplist:{},
    message:"",
  },
  reducers:{},
  extraReducers: (builder) => { 

  }

});

export default groupSlice.reducer;