import {useSelector} from "react-redux"
import {Navigate , Outlet} from "react-router-dom"


function RequireAuth(){

    const isLoggedIn = useSelector((state)=> state?.auth?.authData?.isLoggedIn)

        
    return  isLoggedIn ? (
        <Outlet/>
    ) : isLoggedIn ? (<Navigate to="/denied"/>) : (<Navigate to="/login"/>)

}
export default RequireAuth;