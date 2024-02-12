import { useDispatch } from "react-redux"
import { useNavigate , Link} from "react-router-dom";
import { loginAcc } from "../redux/slices/authSlice";
import { useState } from "react";


function Login(){
     
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loginData , setLogin] = useState({
        email:'',
        password:''
    })

    function handleInput(e){
        const {name,value} =  e.target
         setLogin({
            ...loginData,
            [name]:value
         })
    
    }

    async function loginFunction(e){
      e.preventDefault()

      const res = await dispatch(loginAcc(loginData))
      
      if(res.payload?.success){
         navigate('/discover')
      }
    }

    return(
        <form onSubmit={loginFunction} noValidate>
        <div className="h-[100vh] w-[100vw] bg-[#E8E4DD]"> 
         
         <div className="h-[100vh] w-[100vw] bg-[#E8E4DD] flex justify-center items-center ">
           <div className="shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] h-[400px] w-[350px] bg-white rounded-xl flex justify-center items-center flex-col">

                   <div className=" h-1/6 flex justify-center items-center"> 
                     <h1 className="font-extrabold text-2xl"> Login</h1> 
                   </div>
                   <div className=" h-2/6 py-2 px-8 my-0 flex flex-col items-start ">
                     
                     <h1 className="text-lg ">Email ID:</h1>

                      <div className=" mt-4 text-xs font- flex flex-row justify-center items-center "> 
                      
                      <input 
                      type="email" 
                      name="email" 
                      className="focus:outline-none py-2 w-48 " 
                      placeholder="Enter Your Email"
                      onChange={handleInput}
                      />
                     </div>
                      <div className="border border-black w-44 opacity-40"></div>

                    </div> 

                    <div className="px-8 my-1 flex flex-col items-start relative bottom-4">
                    <h1 className=" text-lg">Password:</h1>
                      <div className=" mt-4 text-xs   flex flex-col justify-center items-center "> 
                      <input 
                      type="password" 
                      name="password" 
                      className="focus:outline-none py-2 w-48 " 
                      placeholder="Enter Password "
                      onChange={handleInput}
                      />
                      <div className="border border-black w-44 opacity-40 relative right-2"></div>
                    </div>
                    </div>

                    <p className="pb-2">
                     Dont have an account ? 
                    <Link to={'/initiateLogin'} className="link text-blue-500"> SignUp </Link>
                    </p>
                    
                    <div className=" h-1/6  flex justify-center items-center" >
                        <button className="my-2 text-sm bg-black text-white rounded-3xl w-24 h-8 flex items-center justify-center " >
                          Login
                        </button>
                    </div>

                    

           </div>
          </div>

        </div></form>
    )
}

export default Login