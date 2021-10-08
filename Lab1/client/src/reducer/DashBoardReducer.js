import { createSlice } from "@reduxjs/toolkit";
import { restlist, restlistfordashue } from "../action/DashBoardActions";

export const restaurantList = createSlice({
  name: "restaurantList",
  initialState: {
    restList: ""
  },
  reducers: {
    setUser: () => {}
  },
  extraReducers: {
    [restlist.fulfilled]: (state, action) => {
      console.log("---action payload restlist------", action.payload);
      console.log("---action payload restlist typr dekhna hai------", action.payload.restList);
      if (action.payload.auth) {
      
        
          state.restList = action.payload.restList;
    
    }
  },

  [restlistfordashue.fulfilled]: (state, action) => {
    console.log("---action payload restlist all rests ue------", action.payload);
    console.log("---action payload restlist typr dekhna hai------", action.payload.restList);
    if (action.payload.auth) {
    
        state.restList = action.payload.restList;
  
  }
}

  
}});

export default restaurantList.reducer;
