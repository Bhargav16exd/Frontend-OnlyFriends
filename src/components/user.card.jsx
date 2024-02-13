import { Link } from "react-router-dom";

function UserCard({name ,avatar , year , branch,id}){
    
    return(
        <div className=" h-72 w-52 max-sm:h-60 max-sm:w-36 rounded-2xl shadow-[0_0_10px_-4px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center my-5 mx-12 max-sm:my-4 max-sm:mx-2">

           
                <img src={avatar} alt="" className="h-[80px] w-[80px] rounded-full my-2 max-sm:h-[60px] max-sm:w-[60px]"/>
       
   
                
                    <h1 className="text-base font-medium my-2 max-sm:text-center ">{name}</h1>
                    <h1 className="text-xs   ">{year}</h1>
                    <h1 className="text-xs  mb-4">{branch}</h1>

                    <Link to={`/letter/write-letter/${name}/${id}`} >
                    <div className="my-2 bg-black text-white rounded-3xl w-24 h-8 flex items-center justify-center mb-4 ">
                        Write
                    </div>
                    </Link>
                

        </div>
    )
}

export default UserCard;