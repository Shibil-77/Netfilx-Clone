import React, {useEffect, useState} from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY} from '../../comstants/constants'
import './RowPost.css'
import YouTube from 'react-youtube'



function RowPost(props) {
 const [movies,setMovies] =useState([])
 const [urlId,setId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((responese)=>{
      setMovies(responese.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
const handleMovie= (id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    // console.log(response.data,'Movie_ID')
    if(response.data.results.length!==0){
      setId(response.data.results[0])
    }else{
      console.log('HELLO')
    }
  })
}
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
         <img onClick={()=>{
         handleMovie(obj.id)
         }} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster👍🏻" />
         )}
      </div>
      {  urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
