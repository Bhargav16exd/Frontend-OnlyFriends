import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance.js"
import toast from "react-hot-toast"

const initialState = {
    userData:[]
}

export const getUsers = createAsyncThunk(
    'user/getUser',
    async function({page,filter}){
         try {

            let res;
            if(filter.branch || filter.year)
            { 
                res =  axiosInstance.post(`/user/filter/${page}/limit/20` ,filter)
            }else{
                
                res =  axiosInstance.get(`/user/page/${page}/limit/20`)}
            
            toast.promise(res,{
                loading: 'Loading',
            },{position:"bottom-right"})
          
            return (await res).data
            
         } catch (error) {
           console.log(error) 
         }
         
         
    }

)

export const searchUser = createAsyncThunk(
    'user/searchUser',
    async function(name){
        let res;
       
         try {
            if(name){
                 res =  axiosInstance.get(`/user/search/${name}`)
            }else{
                 res =  axiosInstance.get(`/user/page/1/limit/20`)
            }
            
            toast.promise(res,{
                loading: 'Loading',
            },{position:"bottom-right"})
            return (await res).data
            
         } catch (error) {
           console.log(error) 
         }
        
    }

)

const getUserSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {},
    extraReducers: (builder)=>{
        builder
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.userData = action.payload?.data
        })
        .addCase(searchUser.fulfilled, (state, action)=>{
            state.userData = action.payload?.data
        })
    }

})

export default getUserSlice.reducer;