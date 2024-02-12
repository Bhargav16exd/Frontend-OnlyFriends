import { Link } from "react-router-dom"
import stamp from '../assets/r.png'

function RecievedCard({content,id}){

    return(


        <Link to={`/view-recieved-letter/${id}`}>
        <div className=" h-60 w-52 rounded-md max-sm:my-4
        shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center my-5 mx-12 ">

           
          {/* uppersection  */}
          
          <div className="h-2/3 font-mono  text-xs overflow-hidden py-8  px-6  ">
            
            <div className="h-full w-full  overflow-hidden">
             {content}
            </div>

          </div>
          {/* lowerSection */}
          <div className="h-1/3 w-full flex justify-end ">
            <div className="h-full py-2 px-2 ">
              <img src={stamp} alt="" className="h-full w-full relative right-4 bottom-4"/>
            </div>
          </div >
                
                
                

        </div>
        </Link>
    )
}

export default RecievedCard