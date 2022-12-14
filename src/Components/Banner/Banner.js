import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../comstants/constants'
import axios from '../../axios'
import './Banner.css'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responese)=>{
      console.log(responese.data.results[0])
      setMovie(responese.data.results[0])
    })
  },[])

  return (
    <div
     style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}} className='Banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.original_name :'Movie'}</h1>
        <div className='Banner_btn'>
            <button type="" className='btn'>Play</button>
            <button type="" className='btn'>My List</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview :'HAI HELLO'}</h1>
      </div>
      <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner
