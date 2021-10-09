import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Backend_URL from '../config/configBackendURL';
import BACKEND_URL from "../config/configBackendURL";


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


        export const restaurantlistfilter= createAsyncThunk(
            'users/restaurantlistfilter',
            async (body)=>{
                const response = await axios.post(BACKEND_URL + "/filter", body)
                return {auth : true, restList: response.data}

            }
        )
    
        export const searcByhModeOfDeliveryOnly = createAsyncThunk(
            'users/searcByhModeOfDeliveryOnly',
            async (body)=>{
                const response = await axios.post(BACKEND_URL + "/searcByhModeOfDeliveryOnly", body)
                return {auth : true, restList: response.data}

            }
        )