import React,{useState} from "react";

export default function UseStateArrayExample()
{
    let IDvalue=0;
    const[Name , setName]=useState('')
    const[Data, setData]=useState([])

    return(
        <>
        <h1>student list</h1>

        <p>
            <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/> 

            <button onClick={()=>{
                setData([
                    ...Data,{ID:IDvalue++, name:Name}
                ])

                setName('')
            }}>
                Add the Value
            </button>
        </p>
        </>
    )

}