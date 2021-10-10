import { createSlice } from "@reduxjs/toolkit";
import { restlist, restlistfordashue } from "../action/DashBoardActions";

export const restaurantList = createSlice({
  name: "restaurantList",
  initialState: {
    restList: []
  },
  reducers: {
    setUser: () => {}
  },
  extraReducers: {
    [restlist.fulfilled]: (state, action) => {
    
      if (action.payload.auth) {
      
        
          state.restList = action.payload.restList;
    
    }
  },

  [restlistfordashue.fulfilled]: (state, action) => {
   
    if (action.payload.auth) {
    
        state.restList = action.payload.restList;
  
  }
}

  
}});

export default restaurantList.reducer;
