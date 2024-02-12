import img from "../assets/cp.png"
import list from "../assets/list.png"
import lett from "../assets/lett.png"
import f from "../assets/f.png"
import { Link } from "react-router-dom"
import heart from "../assets/heart.png"
import logo from "../assets/logp.png"


function LandingPage(){


    return(
        <>
        <div className="h-[100vh] w-[100vw] ">

            <div className=" h-[15%] flex justify-start items-center ">
               <img src={logo} alt=""className="h-36 ml-8 max-sm:ml-5" />
            </div>
            <div className=" h-[85%] w-full flex max-sm:flex-col ">

                <div className="w-1/2 h-full  flex justify-center items-center max-sm:w-full ">
                   <img src={img} className="h-[60%] w-[50%] mb-10 max-sm:h-[80%] max-sm:w-[80%]" />
                </div>
                <div className="w-1/2 h-full  flex justify-center items-start flex-col max-sm:w-full max-sm:items-center  ">

                    <h1 className="font-bold text-5xl my-3  max-sm:text-center">Celebrate this Valentine</h1>
                     <h2 className="font-medium text-2xl my-3 max-sm:my-6 ">Send Anonymous Letters</h2>

                     <div className="flex  w-full my-6 max-sm:items-center max-sm:justify-around ">

                     <Link to={'/initiateLogin'}>
                     <button className="my-2 text-sm bg-black text-white  w-32 h-10 flex items-center justify-center  " >
                          Register
                        </button>
                        </Link>
                        <Link to="/login">
                        <button className="my-2 text-sm bg-black text-white  w-32 h-10 flex items-center justify-center ml-20 max-sm:ml-0 " >
                          Login
                        </button>
                        </Link>
                     </div>

                </div>

            </div>

        </div>
        <div className="h-[100vh] w-[100vw]  flex max-sm:flex-col max-sm:h-[60vh] max-sm:my-16" >

            <div className=" h-full w-[60%] flex justify-center items-center px-10 max-sm:w-full ">
                  <img src={list} alt="" />
            </div>
            <div className=" h-full w-[30%] flex justify-center items-center  max-sm:w-full ">
             <h2 className="font-medium text-2xl my-3 max- ">People <span className="font-bold">exclusively</span>  from your college</h2>
            </div>

        </div>
        <div className="h-[100vh] w-[100vw]  flex max-sm:flex-col-reverse max-sm:h-[50vh] max-sm:mb-8 ">
            
            <div className=" h-full w-[40%] flex justify-center items-center  max-sm:w-full ">
             <h2 className="font-medium text-2xl my-3 text-center  ">Letters sent are completely <span className="font-bold">anonymous</span> and <span className="font-bold">encrypted</span></h2>
            </div>
            <div className=" h-full w-[60%] flex justify-center items-center px-10 py-10 max-sm:w-full ">
                  <img src={lett} className="h-[90%]" />
            </div>
        </div>
        <div className="h-[70vh] w-[100vw]  flex max-sm:flex-col ">
        
            <div className=" h-full w-[30%] flex justify-center items-center  max-sm:w-full ">
                  <img src={f} className="h-[70%]" />
            </div>
            <div className=" h-full w-[70%] flex justify-center items-center px-10 py-10 max-sm:w-full ">
                   <h2 className="font-medium text-2xl my-3 max-sm:flex  max-sm:flex-col max-sm:justify-center max-sm:items-center "><span > Receive <span className=" font-bold">  secret </span>  </span>letters from others</h2>
            </div>
        </div>
        <div className="h-[20vh] w-[100vw]  flex max-sm:flex-col ">
            
            <div className=" h-full w-full flex justify-center items-center  max-sm:w-full ">
            <h2 className="font-medium text-xl my-3 flex "> Made with <img src={heart} alt="" className="h-8 w-8 mx-3" /> in PCCOE </h2>
            </div>
            
        </div>

        </>
    )
}

export default LandingPage;