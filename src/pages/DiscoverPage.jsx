import Homelayout from "../layouts/Homelayout";
import searchh from "../assets/search.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, searchUser } from "../redux/slices/user.slice";
import UserCard from "../components/user.card";
import next from "../assets/next.png"
import prev from "../assets/prev.png"
import useDebounce from "../helpers/useDebounce.js"
import logo from "../assets/logp.png"


function DiscoverPage(){
    
    const dispatch = useDispatch();
    const users = useSelector(state=>state.user?.userData)
    const [page , setCurrentPage] = useState(1)
    const debouncedCallBack = useDebounce((event) => dispatch(searchUser(event.target.value)),1000)
    const [filter , setFilter] = useState({
        year:"",
        branch:""
    })

     const data ={
        page,filter
    }

    async function getUser(){
     const res =  await dispatch(getUsers(data))
    }

    function handleInput(e){
        e.preventDefault()
        const {name , value} = e.target
        setFilter({
            ...filter,
            [name]:value
        })

    }

    useEffect(()=>{
       getUser();
    },[page,filter])



    return(
        <Homelayout>
            <div className="h-full mx-2 text-black rounded-t-3xl bg-white shadow-[0_0_25px_-13px_rgba(0,0,0,0.3)] z-10 sticky top-0 py-8 max-sm:py-2 flex flex-col max-sm:justify-center max-sm:items-center ">
                
           <div className=" w-full flex max-sm:flex-col max-sm:justify-center max-sm:items-center ">
                <div className=" w-1/2  max-sm:w-full max-sm:my-4 max-sm:flex max-sm:items-center max-sm:justify-center">
                 <div className="h-10   bg-[#f3f3f3] w-96 rounded-3xl relative left-16 flex max-sm:left-0 max-sm:w-80 border" >
                    <div className="w-16  flex items-center justify-center cursor-pointer" >
                    <img src={searchh} alt="" className="h-6 w-6 "/>
                    </div>
                    <input 
                    type="text" 
                    name="" 
                    id="" 
                    onChange={debouncedCallBack} 
                    className="h-10  bg-[#f3f3f3] w-80 px-4 rounded-3xl focus:outline-none  text-black placeholder-black max-sm:w-48 "
                    placeholder="Search"
                    />
                </div>
                </div>
                <div className="w-1/2 flex justify-around items-center max-sm:w-full">
                    {/* Branch */}
                     <div className=" w-96 flex justify-between max-sm:w-80">
                     <div className="flex flex-row justify-center items-center  "> 
                            <div className="w-32 py-1 px-2 flex justify-center items-center  rounded-3xl bg-[#f3f3f3] h-10 max-sm:w-36 ">
                            <select id="dropdown1" className="w-full bg-transparent focus:outline-none" name="branch"onChange={handleInput} value={filter.branch} >
                                <option value="" className="">Branch</option>
                                <option value="Computer Science" className="my-10">Computer Science</option>
                                <option value="Mechanical" >Mechanical</option>
                                <option value="ENTC" >ENTC</option>
                                <option value="AIML" >AIML</option>
                                <option value="CIVIL" >CIVIL</option>
                                <option value="Information Technology" >IT</option>
                            </select>
                            </div>
                      </div>    
                   
                   
                   {/* Year */}

                     <div className="flex flex-row justify-center items-center  "> 
                            <div className="w-32 py-1 px-2 flex justify-center items-center rounded-3xl bg-[#f3f3f3] h-10 max-sm:w-36 ">
                            <select id="dropdown2" className="w-full bg-transparent focus:outline-none" name="year" onChange={handleInput} value={filter.year}  >
                                <option value="" className="">Year</option>
                                <option value="First Year" className="my-10">First Year</option>
                                <option value="Second Year" >Second Year</option>
                                <option value="Third Year" >Third Year</option>
                                <option value="Fourth Year" >Fourth Year</option>
                               
                            </select>
                            </div>
                     </div>
                     </div>

                </div>


            </div>    
                { users  ?
              
                <div className="mt-4 mx-4  h-fit w-auto px-4 py-4 flex flex-row justify-evenly flex-wrap max-sm:px-1 max-sm:flex-wrap max-sm:justify-center ">
 
                 {users.map((users)=> <UserCard name={users?.name} year={users?.year} branch={users?.branch} avatar={users?.avatar} key={users?._id} id={users?._id}/>)}

                </div> : <div className="mt-10 mx-4 text-center">No More Users Found</div>

                }
                <div className="h-[10vh] w-full  mx-4 flex justify-center items-center space-x-4 max-sm:mb-10">
                    
                    <button
                     className="my-2 mx-4  text-black rounded-3xl w-24 h-6 flex items-center justify-center "
                     onClick={() => setCurrentPage(page => page !== 1 ? page - 1 : page)}
                     disabled={page === 1}
                     hidden={page === 1}
                    >
                    <img src={prev} alt="" className="h-5 w-5  mx-2"/>
                    Prev
                    </button>
                    {page}
                    <button
                     className="my-2 mx-4   text-black rounded-3xl w-24 h-6 flex items-center justify-center "
                     onClick={() => setCurrentPage(page => page + 1)}
                     disabled={!users}
                    >
                     Next
                     <img src={next} alt="" className="h-5 w-5  mx-2"/>
                    </button>
                    
                 </div>
                

            </div>
        </Homelayout>
    )
}
export default DiscoverPage;    
