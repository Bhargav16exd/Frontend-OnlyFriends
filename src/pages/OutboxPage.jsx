import Homelayout from "../layouts/Homelayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSentLetter } from "../redux/slices/letterSlice";
import SentLetterCard from "../components/sentLetterCard";

function OutboxPage(){

const dispatch = useDispatch()
const letter = useSelector(state=>state.letter?.letterData)


async function getSentLetters(){

    const res = await dispatch(getSentLetter())
}  

useEffect(()=>{
    getSentLetters();
},[])
   

return(
    <Homelayout>
    <div  className="h-full min-h-[40vh] mx-2 bg-white m text-black max-sm:my-2
     rounded-t-3xl shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] z-10 
     py-8 max-sm:py-2 max-sm:mx-8 flex flex-col max-sm:min-h-[45vh] ">
        

    { letter  ?
              
              <div className="my-6 mx-4  h-fit w-auto px-4 py-4 flex flex-row justify-evenly flex-wrap max-sm:space-y-4 ">

               {letter.map((letter)=> <SentLetterCard content={letter.content} name={letter.to} id={letter._id} key={letter._id}  /> )}

              </div> : <div className="mt-4 mx-8 max-sm:w-[80vw] h-fit  px-4 py-4 flex flex-row justify-evenly flex-wrap  ">
                          No letters Sent Yet
                        </div>
}   

    </div>
    </Homelayout>
)

}

export default OutboxPage;