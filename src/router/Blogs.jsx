  



  import React from "react";
import{useNavigate} from "react-router-dom";
import{useLocation} from "react-router-dom";

const Blogs = ()=>{
    const navigate=useNavigate();
    console.log(navigate)
    const location=useLocation();
    console.log(location)
    return(
        <>
        <h1>
            Blogs PAGE
        </h1>
        <p>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/Contact")}>Contact</button>
        </p>
       
        </>
    )
}
export default Blogs