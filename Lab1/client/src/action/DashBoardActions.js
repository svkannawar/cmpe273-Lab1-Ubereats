import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BACKEND_URL from "../config/configBackendURL";


export const restlistforsearch = createAsyncThunk(
    'users/restlistforsearch',
    async (body)=>{

        console.log("inside restlistsearch of DasBoardActions")
        const response = await axios.post(BACKEND_URL + "/search", body)
            
            return {auth : true, restList: response.data}         
         
    })

    export const restlistfordashue = createAsyncThunk(
        'users/restlistfordashue',
        async (body)=>{
            console.log("inside restlistfordashue of DasBoardActions")
            const response = await axios.post(BACKEND_URL + "/displayAllRest", body)
    
                
                return {auth : true, restList: response.data}
               
             
        })

    // export const restlistfordashue = createAsyncThunk(
    //     'users/restlistfordashue',
    //     async (body)=>{
    //         const response = await axios.post(BACKEND_URL + "/displayAllRest", body)
                 
    //             return {auth : true, restList: response.data}
                          
    //     })


        export const restaurantlistfilter= createAsyncThunk(
            'users/restaurantlistfilter',
            async (body)=>{
                console.log("inside restaurantlistfilter of DasBoardActions")
                const response = await axios.post(BACKEND_URL + "/filter", body)
                return {auth : true, restList: response.data}

            }
        )
    
        export const searcByhModeOfDeliveryOnly = createAsyncThunk(
            'users/searcByhModeOfDeliveryOnly',
            async (body)=>{
                console.log("inside searcByhModeOfDeliveryOnly of DasBoardActions")
                const response = await axios.post(BACKEND_URL + "/searcByhModeOfDeliveryOnly", body)
                return {auth : true, restList: response.data}

            }
        )