import {  Link, useParams } from "react-router-dom";
import stamp from '../assets/r.png'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { recievedSingleLetterAPI } from "../redux/slices/letterSlice";


function ViewRecievdLetterPage(){
    
    const dispatch = useDispatch();
    const {id} = useParams()
    const content = useSelector(state=>state?.letter)
    

    const data = content.content;


    async function getLetter(){
        
        const res = await dispatch(recievedSingleLetterAPI(id))

    }

    useEffect(()=>{
        getLetter()
    },[])

    return(
        
     
        <div className="h-screen w-screen flex justify-center items-center max-sm:flex-col ">
              
               <div className=" h-[95%] w-[35%] rounded-3xl bg-white shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] max-sm:w-[90%] max-sm:h-[60%]">
                        
                         <div className="min-h-[70%] py-4 px-6 font-mono  flex justify-center items-center ">
                                
                                <div className="h-full w-full text-xs flex justify-center items-center px-4">
                                 {data}
                                </div>
                               
                         </div>
                         <div className="h-[30%] ">

                            <div className="h-full w-full flex justify-end items-center ">
                                <img src={stamp}  className="h-[40%] mr-16"/>
                            </div>


                         </div>

                        
                        
               </div>
            

               <Link to={'/discover'}> 
               <button  className="my-2 text-sm bg-black text-white rounded-xl w-24 h-8 flex items-center justify-center absolute left-5 top-5 max-sm:relative  max-sm:left-0 " >
                 Back
                </button>
                </Link> 

        </div>
    
        
    )
}

export default ViewRecievdLetterPage;