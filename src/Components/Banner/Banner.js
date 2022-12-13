import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='Banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='Banner_btn'>
            <button type="" className='btn'>Play</button>
            <button type="" className='btn'>My List</button>
        </div>
        <h1 className='discription'>Nam mauris, nullam hendrerit diam id. Dictumst lacinia posuere, curabitur scelerisque, sem ut at quam aliquam. Gravida nam lorem.</h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner
