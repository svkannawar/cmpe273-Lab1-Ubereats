import { createSlice } from "@reduxjs/toolkit";
import { restlist, restlistfordashue, restaurantlistfilter, searcByhModeOfDeliveryOnly } from "../action/DashBoardActions";

export const restaurantListUE = createSlice({
  name: "restaurantListDashboardue",
  initialState: {
    restList: []
  },
  reducers: {
    setUser: () => {}
  },
  extraReducers: {

  [restlistfordashue.fulfilled]: (state, action) => {
   
    if (action.payload.auth) {
    
        state.restList = action.payload.restList;
  
  }
},

[restaurantlistfilter.fulfilled]: (state, action) => {

  if (action.payload.auth) {
  
      state.restList = action.payload.restList;

}
},

[searcByhModeOfDeliveryOnly.fulfilled]: (state, action) => {

  if (action.payload.auth) {
  
      state.restList = action.payload.restList;

}
}



  
}});

export default restaurantListUE.reducer;
