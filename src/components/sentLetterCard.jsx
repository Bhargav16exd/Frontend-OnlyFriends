import { Link } from "react-router-dom";
import stamp from "../assets/stamp.png"

function SentLetterCard({name ,content , id}){
    
    return(

        <Link to={`/view-sent-letter/${id}`}>
        <div className=" h-60 w-44 rounded-xl shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center my-5 mx-12 max-sm:my-0">

           
          {/* uppersection  */}
          <div className="h-1/3 w-full flex ">
          
            <div className="h-full w-1/2  text-xs flex flex-col justify-center items-center">
                 <div className=" h-1/3 w-full flex flex-col justify-center items-start px-4"> To :</div>
                 <div className="h-2/3 w-full  flex justify-center items-center"> <h1 className="font-semibold text-left mx-4"> {name} </h1></div>
            </div>
            <div className="h-full w-1/2   flex justify-center items-center">
                 <img src={stamp} className="h-full" />
            </div>

          </div >

          {/* lowerSection */}
          <div className="h-2/4 font-mono text-xs overflow-hidden py-[18px]  px-4 ">
            
            <div className="h-full w-full  overflow-hidden">
            {content}
            </div>
          </div>
   
                
                
                

        </div>
        </Link>
    )
}

export default SentLetterCard;