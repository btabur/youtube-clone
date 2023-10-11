import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getData } from '../utilis/helpers';
import ReactPlayer from 'react-player';
import Loading from '../components/Loading';
import VideoInfo from '../components/VideoInfo';


const VideoDetail = () => {
  //url deki arama parametersini alır
  const [searchParams] =useSearchParams();

  const [related,setRelated] = useState(null)
  const id= searchParams.get('v');

  useEffect(()=> {
   

    //video ile alakalı videoları getirir

    getData(`/related?id=${id}`)
    .then(res =>setRelated(res.data))
  },[])

  
  return (
    <div className='flex flex-col lg:flex-row lg:px-[100px] gap-5 p-4 min-h-[95vh]'>
     <div>
      <ReactPlayer controls
      url={`https://www.youtube.com/watch?v=${id}`}
      width={'100%'}
      height={'470px'}
      />
    <VideoInfo id={id}/>
     </div>
     <div></div>
    </div>
  )
}

export default VideoDetail
