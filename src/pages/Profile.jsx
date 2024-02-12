import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/slices/authSlice";

function Profile(){

    const user = useSelector((state)=>state.auth?.data)
    const dispatch = useDispatch()



    async function getData(){

      const res = await dispatch(fetchUser())
  
    }
  
    useEffect(()=>{
      getData()
    },[])
         
    
    return(
       <div className="h-[100vh] w-[100vw]  bg-[#FFF4E4] flex justify-center items-center">

          <div className="shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] opacity-80 rounded-lg h-[80%] w-[30%] max-sm:w-[90%] bg-white  "> 
            
            <div className="h-[30%]  flex justify-center items-center py-10 max-sm:py-16 ">
                <img src={user.avatar} className="rounded-full h-full " />
            </div>
            <div className="h-[70%] w-full">

            <div className="  flex my-2 flex-col justify-center items-start space-y-8 pl-20 max-sm:text-4xl py-8 max-sm:py-0 max-sm:pl-10 ">
                    
                    <div className="text-sm  flex justify-center items-center  max-sm:items-start"> 
                     <p className="mr-5 h-full max-sm:mr-0 text-center ">Name :</p>
                      <p>{user.name}</p>   
                     </div>
                     <div className="text-sm  flex justify-center items-center  max-sm:items-start"> 
                     <p className="mr-5 h-full max-sm:mr-0 text-center ">Gender :</p>
                      <p>{user.gender}</p>   
                     </div>
                     <div className="text-sm  flex justify-center items-center  max-sm:items-start"> 
                     <p className="mr-5 h-full max-sm:mr-0 text-center ">Email ID :</p>
                      <p>{user.email}</p>   
                     </div>
                     <div className="text-sm  flex justify-center items-center  max-sm:items-start"> 
                     <p className="mr-5 h-full max-sm:mr-0 text-center ">Year :</p>
                      <p>{user.year}</p>   
                     </div>
                     <div className="text-sm  flex justify-center items-center  max-sm:items-start"> 
                     <p className="mr-5 h-full max-sm:mr-0 text-center ">Branch:</p>
                      <p>{user.branch}</p>   
                     </div>
                     
                    
                  </div>

            </div>
            
          </div>

       </div>
    )


}

export default Profile;