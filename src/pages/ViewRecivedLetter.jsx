import {  Link, useParams } from "react-router-dom";
import stamp from '../assets/r.png'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import letterSlice, { addReply, recievedSingleLetterAPI } from "../redux/slices/letterSlice";


function ViewRecievdLetterPage(){
    
    const dispatch = useDispatch();
    const {id} = useParams()
    const letterContent = useSelector(state=>state?.letter?.content)
    const [data , setData] = useState({
        commentByRecipient:""
    })

    console.log(letterContent)

    const handleInput = (e)=>{
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    async function sendReply(){
        const omg = {
            id : id,
            comment:data.commentByRecipient
        }
        const res = await dispatch(addReply(omg))

        if(res.payload?.statusCode === 200){
            navigate(`/view-recieved-letter/${id}`)
           }
  
    }
    
    async function getLetter(){
        
        const res = await dispatch(recievedSingleLetterAPI(id))

    }

    useEffect(()=>{
        getLetter()
    },[])

    return(
        
     
        <div className="min-h-screen w-screen flex flex-col justify-center items-center max-sm:flex-col my-4 ">
              
               <div className="min-h-[50vh] w-[35%] rounded-3xl bg-white shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] max-sm:w-[90%] ">
                        
                         <div className="min-h-[50vh] py-4 px-6 font-mono  flex justify-center items-center ">
                                
                                <div className="h-full w-full text-xs flex justify-center items-center px-4">
                                 {letterContent.content}
                                </div>
                               
                         </div>
                         <div className="h-[30vh] border max-sm:h-[20vh]">

                            <div className="h-full w-full flex justify-end items-center ">
                                <img src={stamp}  className="max-h-[40%] mr-16 m"/>
                            </div>


                         </div>

                        
                        
               </div>
               <div className="my-10 min-h-[10vh] w-[35%] rounded-3xl bg-white shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] max-sm:w-[90%] ">
                        
                        {
                           letterContent.comment ? 
                            <div className="min-h-[10vh] py-4 px-6 font-mono  flex justify-center items-center ">
                                
                                <div className="h-full w-full text-xs flex justify-center items-center px-4">
                                 {letterContent.comment}
                                </div>
                            </div> :
                            <>
                            <div className="h-[57%] py-4 px-6 font-mono">                           
                            <textarea 
                            name="commentByRecipient" 
                            id="commentByRecipient"
                            onChange={handleInput}
                            value={data.commentByRecipient}
                            placeholder="Type your Reply here... "
                            className="h-full w-full focus:outline-none resize-none text-xs"
                            ></textarea>
                            </div>

                          <div className="h-[13%] flex justify-center items-center" >
                          <button onClick={sendReply} className="my-2 text-sm bg-black text-white rounded-xl w-24 h-8 flex items-center justify-center " >
                          Reply
                         </button>
                         </div> 
                         </>
                            
                        }

                         
                        
                    
                        
               </div>
            

               <Link to={'/discover'}> 
               <button  className="my-2 text-sm bg-black text-white rounded-xl w-24 h-8 flex items-center justify-center absolute left-5 top-5 max-sm:relative max-sm:mb-10  max-sm:left-0 " >
                 Back
                </button>
                </Link> 

        </div>
    
        
    )
}

export default ViewRecievdLetterPage;