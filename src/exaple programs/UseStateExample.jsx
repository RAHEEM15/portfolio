import React,{useState} from "react";

export default function UseStateExample()
{
    const [ display, setdisplay ]=useState("");

    return(
        <>
        <h3 >Welcome to Chennai {display}</h3>

        <form>
            <lable>Enter the Name</lable>
            <input type="text" value={display} onChange={(event)=>setdisplay(event.target.value)}></input>

        </form>
        
        </>
    )

}