import { useEffect, useState } from "react";
import discover from "../assets/discover.png";
import inbox from "../assets/inbox.png";
import outbox from "../assets/outbox.png";
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"
import {Link, useLocation, useNavigate} from "react-router-dom"
import imglogout from "../assets/logoutimg.png"  
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logout } from "../redux/slices/authSlice";
import clipboardCopy from 'clipboard-copy';
import toast from "react-hot-toast";
import logo from "../assets/logp.png"

const handleCopyToClipboard = (text) => {
  clipboardCopy(text)
    .then(() => {
      toast.success("Copied to Clipboard Successfully")
    })
    .catch((error) => {
      console.error('Error copying to clipboard:', error);
    });
};


function Homelayout({ children }) {

  const [active, setActive] = useState("");
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state)=>state.auth?.data)


  
  async function getData(){

    const res = await dispatch(fetchUser())

  }

  useEffect(()=>{
    getData()
  },[])
   
  function handle(){
    navigate('/profile')
  }
  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/discover") {
      setActive("discover");
    } else if (pathname === "/inbox") {
      setActive("inbox");
    } else if (pathname === "/outbox") {
      setActive("outbox");
    }
  }, [location]);

   async function LOGOUT(){
     
    const res = await dispatch(logout())


    if(res.payload?.statusCode === 200){
      navigate('/')
    }
   }

  return (
    
    <>
       <div className="h-full w-full bg-[#FFF4E4] flex flex-col max-sm:justify-center max-sm:items-center">
        
                    

        <div className="h-[50vh]  flex">

          <div className=" h-1/6  flex justify-center items-center  absolute right-0 px-10 max-sm:px-5 max-sm:h-20" >
              <button onClick={LOGOUT} className="my-2 text-sm   text-black rounded-3xl w-24 h-8 flex items-center justify-center " >
                  Logout <img src={imglogout} alt="" className="h-4 w-4  mx-2 "/>
              </button>
          </div>

          <div className="w-1/2 h-full  flex justify-center items-end">
          <div className=" h-[15%] flex justify-center items-center flex-col absolute top-0 left-0 max-sm:top-6 max-sm:h-10">
               <img src={logo} alt=""className="h-36 max-sm:ml-5" />
            </div>
            <img src={girl} alt="" className=" h-60 relative top-14  " />
          </div>
          <div className="w-1/2 h-full  flex justify-center items-end ">

            {/* profile box */}
            
            <div className="z-20 absolute self-center top-16 h-[35%] w-[25%] max-sm:h-[30%] max-sm:w-[80%] max-sm:left-10 max-sm:top-28">
               
               <div className=" h-1/2 my-2 rounded-xl flex">
                
                <div className="bg-white opacity-90 h-full w-1/3 mx-2 rounded-xl flex flex-col justify-center items-center py-2 px-4 cursor-pointer" onClick={handle}>
                  
                  <img src={user.avatar} className="rounded-full z-100 opacity-100 h-1/2 mb-2" />
                  <p className="text-base "> My Profile</p>
                  
                </div>
                
                <div className="bg-white opacity-80 h-full w-2/3 mx-2 rounded-xl flex flex-col justify-center items-center py-4 px-4">
                    <p className="text-xs my-1 "> Dont Find Familiar Faces ?</p> 
                    <p className="text-xs my-1 "> Invite Your Friends</p>
                    <button onClick={() => handleCopyToClipboard('https://onlyfriends.in/')} className="my-2 py-2 text-sm bg-black text-white rounded-3xl w-20 h-8 flex items-center justify-center ">
                      Invite
                    </button>
                </div>
               </div>
               <div className="bg-white opacity-80 my-2 rounded-xl h-1/2 mx-2">

               </div>
            </div>

            <img src={boy} alt="" className="z-0 h-64 relative top-14 right-[120px] max-sm:right-[10px] max-sm:h-60 max-sm:w-auto" />
          </div>



          

        </div>

        <div className="z-20 h-[8vh] w-full max-sm:h-14
         text-black text-lg font-semibold  max-sm:fixed max-sm:bottom-0 max-sm:flex max-sm:justify-around max-sm:w-screen  sm:flex  sm:justify-around sm:sticky sm:top-0 max-sm:bg-white">


          <Link to={'/discover'} >
          <div className={` w-64 h-full flex justify-center items-center cursor-pointer rounded-t-3xl max-sm:w-fit active:drop-shadow ${
          active === "discover" ? "bg-white " : ""
          } `}
          onClick={() => setActive("discover")}>
            Discover
            <img src={discover} alt="" className="h-6 w-6  mx-2"/>
            
          </div>
          </Link> 


          <Link to={'/inbox'}>
          <div className={`w-64 h-full flex justify-center items-center cursor-pointer rounded-t-3xl max-sm:w-fit ${
          active === "inbox" ? "bg-white " : ""
          }`}
          onClick={() => setActive("inbox")}>
            Inbox
            <img src={inbox} alt="" className="h-6 w-6  mx-2"/>
          </div>
          </Link>

          <Link to={'/outbox'}>
          <div className={` w-64 h-full flex justify-center items-center cursor-pointer rounded-t-3xl max-sm:w-fit ${
          active === "outbox" ? "bg-white " : ""
          }`}
          onClick={() => setActive("outbox")}>

            Outbox
            <img src={outbox} alt="" className="h-6 w-6  mx-2"/>
          </div>
          </Link>

          </div>

    
      {children}
    </div>   
    </> 
    
  );
}

export default Homelayout;