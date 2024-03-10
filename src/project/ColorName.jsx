import React,{useState} from "react";

export default function ColorName()
{
    const[color, setcolor]=useState('0')

    return(
        <>
        <h1>Color Name Display Project</h1>

        <h3>Color Name - {color}</h3>
        
        <p>
            <button onClick={()=>setcolor("Red color")}>Red</button>
            <button onClick={()=>setcolor("Blue color")}>Blue</button>
            <button onClick={()=>setcolor("Pink color")}>Pink</button>
        </p>
        </>
    )
}