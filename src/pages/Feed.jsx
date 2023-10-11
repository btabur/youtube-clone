import React, { useContext } from 'react'
import SideBar from '../components/SideBar'
import { YoutubeContex } from '../context/youtubeContext'
import Loading from '../components/Loading';
import VideoCard from '../components/VideoCard';

const Feed = () => {
  const {videos} = useContext(YoutubeContex);
  return (
    <div className='flex gap-4 overflow-y-hidden'>
      <SideBar/>
      <div className='videos'>
        {!videos ? <Loading/> :
        videos.map(video => <VideoCard key={video.videoId} video= {video}/>)
        }
      </div>
      
    </div>
  )
}

export default Feed
