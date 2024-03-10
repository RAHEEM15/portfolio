import React from "react";
import{useNavigate} from "react-router-dom";
import{useLocation} from "react-router-dom";

const Home = ()=>{
    const navigate=useNavigate();
    console.log(navigate)
    const location=useLocation();
    console.log(location)
    return(
        <>
        <h1>
            HOME PAGE 
        </h1>
        <p>
            <button onClick={()=>navigate("/contact")}>Contact</button>
            <button onClick={()=>navigate("/blogs")}>Blogs</button>

        </p>
        </>
    )
}
export default Home
