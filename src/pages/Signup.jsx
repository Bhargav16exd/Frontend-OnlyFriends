import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { signup } from "../redux/slices/authSlice";
import { useNavigate , Link} from "react-router-dom";

function SignupPage(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [data , setData] = useState({
        fname:"",
        lname:"",
        name: "",
        email:"" ,
        year:"",
        branch:"",
        gender:"",
        password:"",
        confirmPassword:"",
        otp:""
    })

    
    useEffect(() => {
        setData(data => ({
            ...data,
            name: data.fname + " " + data.lname,
        }));
    }, [data.fname, data.lname]);

    function handleInput(e) {
        e.preventDefault();
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    

    async function handleSubmit(e){
        e.preventDefault()

    
        if(data.password !== data.confirmPassword){
            toast.error("Passwords do not match")
            return
        }

        const res = await dispatch(signup(data))

        if(res.payload?.statusCode === 200){
          navigate('/login')
         }

     
    }

    return(
        <form onSubmit={handleSubmit} noValidate >
        <div className="h-fit w-[100vw] bg-[#E8E4DD] flex flex-col justify-center items-center max-sm:h-fit max-sm:w-screen py-10 ">
   
          
          <div className=" h-[700px] w-[600px] shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)]  bg-white rounded-xl py-10 px-10  
          max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:px-15 max-sm:rounded-xl 
          max-sm:pt-10 max-sm:h-fit max-sm:w-[90%] 
          ">        
                     
                   
                   {/* heading  */}
                   <div className="mb-10 flex justify-center items-center max-sm:mb-8 "> 
                     <h1 className="font-extrabold text-2xl max-sm:text-5xl"> Sign Up</h1> 
                   </div>

                    {/* Name */}
                    <div className="  flex my-2 flex-col justify-center items-start pl-10 max-sm:pl-0">
                    
                     <div className="text-sm  flex justify-center items-center max-sm:flex-col max-sm:items-start"> 
                      <p className="mr-5 h-full max-sm:mr-0 text-center ">Name :</p>
                        <input 
                        type="text" 
                        name="fname" 
                        className="focus:outline-none py-2  w-48 max-sm:w-64 max-sm:my-4  " 
                        placeholder="First Name"
                        onChange={handleInput}
                        value={data.fname}
                        />
                        <input 
                        type="text" 
                        name="lname" 
                        className="focus:outline-none py-2 w-48 max-sm:w-64  max-sm:my-4 " 
                        placeholder="Last Name"
                        onChange={handleInput}
                        value={data.lname}
                        />
                          
                      </div>
                      <div className="flex max-sm:flex-col">
                      <span className="border border-black w-44 opacity-40 relative left-[70px] max-sm:w-64 max-sm:bottom-20 max-sm:flex-col max-sm:left-0"></span>
                      <span className="border border-black w-44 opacity-40 relative left-[90px] max-sm:w-64 max-sm:left-0 max-sm:bottom-2 "></span>
                      </div>
                   </div> 

                    {/* email */}
                   <div className="  my-4 flex flex-col justify-center items-start pl-10 max-sm:pl-0 max-sm:w-fit max-sm:border ">
                     <div className="text-sm  flex flex-row justify-center items-center  max-sm:flex-col max-sm:w-64 max-sm:items-start"> 
                        <p className="mr-5 max-sm:mr-0 max-sm:my-2">Email ID :</p>
                        <div className="max-sm:flex  max-sm:justify-center max-sm:items-center"> 
                        <input 
                        type="email" 
                        name="email" 
                        className="focus:outline-none py-2 w-48 relative left-20 max-sm:left-0 " 
                        placeholder="Enter Your Email"
                        onChange={handleInput}
                        value={data.email}
                        />
                        <span className="relative left-20 max-sm:relative max-sm:bottom-0 max-sm:left-0">@pccoepune.org</span>
                        </div>  
                      </div>
                      <div className="border border-black w-44 opacity-40 relative left-[150px]  max-sm:left-0"></div>
                   </div> 

                   {/* Gender */}
                   <div className="  mt-4 flex flex-col justify-center items-start  pl-10 max-sm:pl-0">
                     <div className="text-sm  flex justify-center items-center max-sm:flex-col max-sm:items-start  "> 
                        <p className="mr-5 max-sm:my-2">Gender :</p>
                         <div className="flex max-sm:flex-col ">
                         <label>
                            <input type="radio" name="gender" value="MALE" 
                            checked={data.gender === "MALE"}
                            onChange={handleInput}
                            className="my-4 mx-6 relative left-20  max-sm:left-0"/> Male
                            <input type="radio" name="gender" value="FEMALE"
                            checked={data.gender === "FEMALE"}
                            onChange={handleInput}
                            className="my-4 mx-6 relative left-24  max-sm:left-0"/> Female
                        </label>
                         </div> 
                      </div>
                   </div> 

                   {/* Branch */}
                   <div className="  my-4 flex flex-col justify-center items-start  pl-10 max-sm:pl-0">
                     <div className="text-sm  flex flex-row justify-center items-center max-sm:flex-col max-sm:items-start "> 
                        <p className="mr-5 max-sm:my-4">Branch :</p>

                            <div className="border py-1 px-2 mx-2 rounded-3xl bg-[#D9D9D9] relative left-16 max-sm:left-0 max-sm:mx-0">
                            <select id="dropdown1" className="w-full bg-transparent focus:outline-none" name="branch" onChange={handleInput} value={data.branch} >
                                <option value="" className="">Choose Your Branch</option>
                                <option value="Computer Science" className="my-10">Computer Science</option>
                                <option value="Mechanica" >Mechanical</option>
                                <option value="ENTC" >ENTC</option>
                                <option value="AIML" >AIML</option>
                                <option value="CIVIL" >CIVIL</option>
                                <option value="Information Technology" >IT</option>
                            </select>
                            </div>
                      </div>    
                   </div> 
                   
                   {/* Year */}

                   <div className="  my-4 flex flex-col justify-center items-start  pl-10 max-sm:pl-0">
                     <div className="text-sm  flex flex-row justify-center items-center max-sm:flex-col max-sm:items-start"> 
                        <p className="mr-5 max-sm:my-4">Year :</p>

                            <div className="border py-1 px-2 mx-2 rounded-3xl bg-[#D9D9D9] relative left-20 w-[167px]  max-sm:left-0  max-sm:mx-0">
                            <select id="dropdown2" className="w-full bg-transparent focus:outline-none" name="year" onChange={handleInput} value={data.year} >
                                <option value="" className="">Choose Your Year</option>
                                <option value="First Year" className="my-10">First Year</option>
                                <option value="Second Year" >Second Year</option>
                                <option value="Third Year" >Third Year</option>
                                <option value="Fourth Year" >Fourth Year</option>
                               
                            </select>
                            </div>
                      </div>    
                   </div>

                    {/* Password */}
                    <div className="  my-6 flex flex-col justify-center items-start  pl-10 max-sm:pl-0">
                     <div className="text-sm  flex flex-row justify-center items-center max-sm:flex-col max-sm:items-start "> 
                        <p className="mr-5">Password :</p>
                        <input 
                        type="password" 
                        name="password" 
                        className="focus:outline-none py-2 w-52 relative left-14 max-sm:left-0 " 
                        placeholder="Enter a New Password"
                        onChange={handleInput}
                        value={data.password}
                        />
                      </div>
                      <div className="border border-black w-48 opacity-40 relative left-[140px]   max-sm:left-0"></div>
                   </div>

                     {/* Confirm Password */}

                    <div className="  my-6 flex flex-col justify-center items-start  pl-10 max-sm:pl-0">
                     <div className="text-sm  flex flex-row justify-center items-center max-sm:flex-col max-sm:items-start"> 
                        <p className="mr-5">Confirm Password :</p>
                        <input 
                        type="password" 
                        name="confirmPassword" 
                        className="focus:outline-none py-2 w-56 " 
                        placeholder="Please Re-enter Your Password"
                        onChange={handleInput}
                        value={data.confirmPassword}
                        />
                      </div>
                      <div className="border border-black w-48 opacity-40 relative left-[140px] max-sm:left-0"></div>
                   </div>

                     {/* OTP*/}
                     
                     <div className="  my-6 flex flex-col justify-center items-start  pl-10  max-sm:pl-0">
                     <div className="text-sm  flex flex-row justify-center items-center max-sm:flex-col max-sm:items-start "> 
                        <p className="mr-5">OTP :</p>
                        <input 
                        type="text" 
                        name="otp" 
                        className="focus:outline-none py-2 w-56 relative left-24 max-sm:left-0" 
                        placeholder="Enter OTP"
                        onChange={handleInput}
                        value={data.otp}
                        />
                      </div>
                      <div className="border border-black w-48 opacity-40 relative left-[140px] max-sm:left-0"></div>
                    </div>

                   

                    <div className=" h-1/6  flex justify-center items-center" >
                        <button className="my-2 text-sm bg-black text-white rounded-3xl w-24 h-8 flex items-center justify-center " >
                          Sign Up
                        </button>
                    </div>

            
          </div>
          

        </div>
        </form>
    )
}

export default SignupPage;