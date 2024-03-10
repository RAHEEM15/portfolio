import React,{useState} from "react";
import './Counter.css';

export default function CounterApplication()
{
    const[Count, setCount]=useState(0);

    return(
        <>
        <div className="container">
        <h1>Counter Application</h1>

        

        <h3>Count value is  {Count}</h3>

        
        <p className="btn">
        <button className="btn1" onClick={()=>setCount(Count-1)}>-</button>
        <button className="btn2" onClick={()=>setCount(0)} >Reset</button>
        <button className="btn3" onClick={()=>setCount(Count+1)}>+</button>
        
        </p>

        </div>
        
        </>
    )
}