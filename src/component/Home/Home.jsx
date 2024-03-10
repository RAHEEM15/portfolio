import React from 'react'
import Growingplant from './Growingplant/Growingplant'

function Home() {

    const plantsData1 = {
        name : 'rose',
        icon : 'rose icon',  
        size :  40
    }

    const plantsData2 = {
        name : 'sun flower',
        icon : 'sun icon',  
        size :  60
    }

  return (
    <div>
        <h1>welcome to Home</h1>
        <Growingplant plantsData={plantsData1} />
        <Growingplant plantsData={plantsData2}/>
    </div>
  )
}

export default Home