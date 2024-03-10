import React from 'react'
import { useState } from 'react'

const Todolist = () => {

  const [name , setname] = useState("raheem")
 function handlechange(){
    const names=["raheem","mani"," jahir"]
    const int=Math.floor(Math.random()*3)
    setname(names[int])

 }
  

  return (
    <main>
    <div>Todolist hi this {name} </div>
    <button onClick={handlechange}> click</button>
    
    </main>
  )
}

export default Todolist
