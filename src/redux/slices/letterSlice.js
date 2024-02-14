import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance.js"
import toast from "react-hot-toast"

const initialState = {
    letterData:[],
    singleSentLetterData:{},
    recievedLetterData:[],
    content:{}
}



export const sendLetter = createAsyncThunk(
    'letter/sendLetter',
    async function (data){
       
        try {

            const res = axiosInstance.post(`/letter/send-letter/${data.to}`, data)
            toast.promise(res,{
                loading: 'Sending Letter',
            })
            return (await res).data
            
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const getSentLetter = createAsyncThunk(
    'letter/getSentLetters',
    async function (){
        try {
            const res = axiosInstance.get('/letter/list-sent-letters')
            toast.promise(res,{
                loading: '',
            },{position:"bottom-right"})
            return (await res).data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const getsingleLetter = createAsyncThunk(
    'letter/getSingleLetter',
    async function (id){
        try {
            const res = axiosInstance.get(`/letter/view-sent-letter/${id}`)
            toast.promise(res,{
                loading: '',
            },{position:"bottom-right"})
            return (await res).data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const recievedLettersAPI = createAsyncThunk(
    'letter/recieveLetter',
    async function (){

        try {
            const res = axiosInstance.get(`/letter/list-recieved-letters/`)
            toast.promise(res,{
                loading: '',
            },{position:"bottom-right"})
            return (await res).data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const recievedSingleLetterAPI = createAsyncThunk(
    'letter/recieveSingleLetter',
    async function (id){
        
        try {
            const res = axiosInstance.get(`/letter/view-recieved-letter/${id}`)
            toast.promise(res,{
                loading: '',
            },{position:"bottom-right"})
            return (await res).data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)

export const addReply = createAsyncThunk(
    'letter/add-comment',
    async function (data){
        
        try {
            const res = axiosInstance.post(`/letter/add-comment/${data.id}`, data)
            toast.promise(res,{
                loading: '',
            },{position:"bottom-right"})
            return (await res).data
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }
)



const letterSlice = createSlice({
    name: 'letter',
    initialState,
    reducers : {},
    extraReducers: (builder)=>{
        builder
        .addCase(getSentLetter.fulfilled, (state, action)=>{
            state.letterData = action.payload?.data
        })
        .addCase(getsingleLetter.fulfilled, (state, action)=>{
            state.singleSentLetterData = action.payload?.data
        })
        .addCase(recievedLettersAPI.fulfilled, (state, action)=>{
            state.recievedLetterData = action.payload?.data
        })
        .addCase(recievedSingleLetterAPI.fulfilled, (state, action)=>{
            state.content = action.payload?.data
        })
    }
})

export default letterSlice.reducer;