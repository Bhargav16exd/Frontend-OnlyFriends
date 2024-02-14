import {  Link, useParams } from "react-router-dom";
import stamp from '../assets/stamp.png'
import line from '../assets/line.png'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getsingleLetter } from "../redux/slices/letterSlice";



function ViewSentLetterPage(){
    
    const dispatch = useDispatch();
    const {id} = useParams()
    const letterData = useSelector(state=>state.letter.singleSentLetterData)

   

    async function getLetter(){
        
        const res = await dispatch(getsingleLetter(id))

    }

    useEffect(()=>{
        getLetter()
    },[])

    return(
        
     
        <div className="h-fit w-screen flex justify-center items-center py-4 max-sm:flex-col">
              
               <div className="min-h-[90vh] w-[35%] rounded-3xl bg-white shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] max-sm:w-[90%]">
                         <div className="h-[22%] flex">
                            <div className="h-full w-3/4 px-8 py-10">
                                
                                <div className="flex">
                                    <h1 className="font-semibold">To,</h1>
                                    <h1 className="font-extrabold px-1">{letterData.name} </h1>
                                </div>

                            </div>
                            <div className=" relative top-4 h-full w-1/2  flex justify-center items-center">
                                <img src={stamp}  className="h-[80%]"/>
                            </div>
                         </div>
                         <div className=" h-[5%]">
                              <img src={line} alt="" />
                         </div>
                         <div className="h-[57%] py-4 px-6 font-mono">
                                
                                <div className="h-full w-full text-xs">
                                 {letterData.content}
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

export default ViewSentLetterPage;