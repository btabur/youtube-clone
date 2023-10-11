import React, { useEffect, useState } from 'react'
import { getData } from '../utilis/helpers'

const VideoInfo = ({id}) => {
    const [detail,setDetail] =useState(null);
    const [channel,setChannel] =useState(null);
   

    useEffect(()=> {
        //video detaylarını alır
        getData(`/video/info?id=${id}`)
        .then (res =>setDetail(res.data))

        //kanal detaylarını alır
        getData(`/channel/about?id=${id}`)
        .then(res=> setChannel(res.data))
    },[])
  return (
    <div>
        <h1 className='mt-3 text-xl font-bold '></h1>
        <div className='flex  justify-between items-center'>
            <div>
                <img src='https://picsum.photos/200' alt="" />
                <div>
                    <h4></h4>
                    <p></p>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default VideoInfo