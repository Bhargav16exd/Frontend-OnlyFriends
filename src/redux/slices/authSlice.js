import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance.js"
import toast from "react-hot-toast";

const initialState = {
    authData:{
        data: localStorage.getItem('data') || {},
        isLoggedIn : localStorage.getItem('isLoggedIn') || false,
    },
    data:{}
}

export const fetchUser = createAsyncThunk(
    '/auth/fetchUser',
    async function(){
        try {
            const res = axiosInstance.get('/user/user-profile')
            toast.promise(res, {
                loading:""
            })
            return (await res).data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const verfiyEmail = createAsyncThunk(
    '/auth/verifyEmail',
    async function(email){
        try {

            const res = axiosInstance.post('/user/initiateLogin',{email})
            toast.promise(res,{
                loading: 'Sending OTP...',
            })
            return (await res).data
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)
export const signup = createAsyncThunk(
    '/auth/verifyEmail',
    async function(data){
        if(!data.email.includes("@pccoepune.org")){data.email = data.email + "@pccoepune.org"}
        try {

            const res = axiosInstance.post('/user/register',data)
            toast.promise(res,{
                loading: 'Registering...',
            })
            return (await res).data
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const loginAcc = createAsyncThunk(
    "/auth/login",
    async function(data){
      
        try {
            const res = axiosInstance.post("/user/login/",data)
            toast.promise(res ,
                {
                    loading:"Loggin In to Your Account",
                    success:(data)=>{
                        return data?.data?.message
                    },
                    error:""
                },
                )
                return (await res).data
        } catch (error) {
            toast.error(error?.response?.data?.message)   
        }
    }
)

export const logout = createAsyncThunk(
    "/auth/logout",
    async function(){
        try {
            const res = axiosInstance.post("/user/logout/")
            toast.promise(res,{
                loading:"Logging out of account",
                success:(data)=>{
                    return data?.data?.message
                },
                error:"Error"
            })
            localStorage.clear()
            return (await res).data
        } catch (error) {
            toast.error(error?.message) 
        }
    }
)



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {},
    extraReducers: (builder)=>{
        builder
        .addCase(loginAcc.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.data))         
            localStorage.setItem("isLoggedIn",true)
            state.authData.data = action?.payload?.data?.loggedInUserDetails
            state.authData.isLoggedIn = true
        })
        .addCase(logout.fulfilled,(state,action)=>{
            localStorage.clear()
            state.authData.data = {}
            state.authData.isLoggedIn = false
        })  
        .addCase(fetchUser.fulfilled,(state,action)=>{
           
            state.data = action.payload?.data
        })
    }
})

export default authSlice.reducer;