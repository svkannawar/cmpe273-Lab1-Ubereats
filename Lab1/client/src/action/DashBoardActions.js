import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Backend_URL from '../config/configBackendURL';


export const restlist = createAsyncThunk(
    'users/restlist',
    async (body)=>{
        const response = await axios.post(Backend_URL + "/search", body)

            
            return {auth : true, restList: response.data}
           
         
    })

    export const restlistfordashue = createAsyncThunk(
        'users/restlistfordashue',
        async (body)=>{
            const response = await axios.post(Backend_URL + "/displayAllRest", body)
    
                
                return {auth : true, restList: response.data}
               
             
        })
