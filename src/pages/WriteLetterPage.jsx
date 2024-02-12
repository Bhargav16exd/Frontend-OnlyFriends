import { useParams ,useNavigate, Link } from "react-router-dom";
import stamp from '../assets/stamp.png'
import line from '../assets/line.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendLetter } from "../redux/slices/letterSlice";


function WriteLettterPage(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {name ,id} = useParams();
    const [letterData, setLetterData] = useState({
        to:id,
        content:""        
    })

    function handleInput(e){
       
        const {name, value} = e.target;
        setLetterData({
            ...letterData,
            [name]:value
        })
    }

    async function submitLetter(e){
        
        e.preventDefault();
        
        const res = await dispatch(sendLetter(letterData))
       
        if(res.payload?.success){
            navigate('/discover')
        }
    }

    return(
        
        <form noValidate onSubmit={submitLetter}> 
        <div className="h-screen w-screen flex justify-center items-center max-sm:flex-col">
              
               <div className=" h-[95%] w-[35%] rounded-3xl bg-white shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] max-sm:w-[90%]">
                         <div className="h-[22%] flex">
                            <div className="h-full w-3/4 px-8 py-10">
                                
                                <div className="flex">
                                    <h1 className="font-semibold">To,</h1>
                                    <h1 className="font-extrabold px-1"> {name}</h1>
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

                                <textarea 
                                name="content" 
                                id="content"
                                onChange={handleInput}
                                value={letterData.content}
                                placeholder="Type your letter here... "
                                className="h-full w-full focus:outline-none resize-none text-xs"
                                ></textarea>
                               
                         </div>

                         <div className="h-[13%] flex justify-center items-center" >
                        <button  className="my-2 text-sm bg-black text-white rounded-xl w-24 h-8 flex items-center justify-center " >
                          Post
                        </button>
                    </div>
               </div>
            

               <Link to={'/discover'}> 
               <button  className="my-2 text-sm bg-black text-white rounded-xl w-24 h-8 flex items-center justify-center absolute left-5 top-5 max-sm:relative  max-sm:left-0 " >
                 Back
                </button>
                </Link> 

        </div>
        </form>  
        
    )
}

export default WriteLettterPage;