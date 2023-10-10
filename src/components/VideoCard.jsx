import React from 'react'

const VideoCard = ({video}) => {
  return (
    <div>
        {/* resim kısmı */}
        <div>
            <img src={video.thumbnail.pop().url} />
        </div>
        {/* alt kısım */}
        <div>

        </div>
    </div>
  )
}

export default VideoCard