import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Backend_URL from '../config/configBackendURL';


    export const restlistfordashue = createAsyncThunk(
        'users/restlistfordashue',
        async (body)=>{
            const response = await axios.post(Backend_URL + "/displayAllRest", body)
    
                
                return {auth : true, restList: response.data}
               
             
        })
