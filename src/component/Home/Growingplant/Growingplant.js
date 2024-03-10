import React from 'react'
// import './Growingplant.scss'

function Growingplant(props) {

  // const PlantName = 'Sunflower'
  // const Size = 50

  const Defaultdata = {
    name: 'Default name',
    icon: 'Default icon',
    size: 30,
  }

  const { plantsData = Defaultdata } = props

  return (
    <div className='plant'>
      <h1>I am a {plantsData.name}</h1>
      <div>I am growing <span style={{ fontsize: `${plantsData.size}px` }}>
        {plantsData.icon}</span>
      </div>
    </div>
  )
}

export default Growingplant