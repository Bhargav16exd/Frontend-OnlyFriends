import { useState } from "react";
import {useDispatch} from "react-redux";
import { verfiyEmail } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

function InitiateLogin(){

    const [email,setEmail] = useState({
        email:""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleInput(e){
        const {name,value} = e.target
        setEmail({
            ...email,
            [name]:value
        })
    }

    async function sendOTP(e){

        e.preventDefault()
        
        const emailWithDomain = email.email + "@pccoepune.org";
        const res = await dispatch(verfiyEmail(emailWithDomain))
        
        if(res.payload?.statusCode === 200){
            navigate('/signup')
            
        }
    }

    return(
        
        <form onSubmit={sendOTP} noValidate>
        <div className="h-[100vh] w-[100vw] bg-[#E8E4DD]"> 
         
         <div className="h-[100vh] w-[100vw] bg-[#E8E4DD] flex justify-center items-center">
           <div className="shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] h-[400px] w-[350px] bg-white rounded-xl">

                   <div className=" h-1/6 flex justify-center items-center"> 
                     <h1 className="font-extrabold text-2xl"> Sign Up</h1> 
                   </div>
                   <div className=" h-2/6 py-2 px-8 my-2 flex flex-col items-start">
                     
                     <h1 className="font-semibold text-lg">Email ID:</h1>

                      <div className=" mt-4 text-xs font-bold flex flex-row justify-center items-center "> 
                      
                      <input 
                      type="email" 
                      name="email" 
                      className="focus:outline-none py-2 w-48 " 
                      placeholder="Enter Your Email"
                      onChange={handleInput}
                      value={email.email}
                      />
                      <span className="">@pccoepune.org</span>  </div>

                      <div className="border border-black w-44 opacity-40"></div>
                    </div> 
                    <div className=" h-1/6 text-xs px-10 font-bold flex flex-col justify-center items-center " >
                        <p className="text-center my-4">Kindy dont enter @pcccoepune.org in the email</p>
                         <p className="text-center mb-16">This email is not shared with anyone but we require to confirm your identity</p>
                    </div>
                    
                    <div className="flex justify-center items-center" >
                        <p className="text-sm pb-2">
                        Already have an account ? 
                        <Link to={'/login'} className="link text-blue-500"> Login </Link>
                      </p>
                    </div>
                    <div className=" h-1/6  flex justify-center items-center" >
                        <button className="my-2 text-sm bg-black text-white rounded-3xl w-24 h-8 flex items-center justify-center " >
                          Send OTP
                        </button>
                    </div>
                    

           </div>
          </div>

        </div></form>
    )
}

export default InitiateLogin;