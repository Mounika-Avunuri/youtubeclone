import { Avatar } from '@mui/material'
import React from 'react'

function VideoCard({image,title,channel,timestamp,views,channelimage}) {
  return (
    <div className="videoCard">
       <img className="videoCard_thumbnail"src={image} alt=""/>
       <div className="videoCard_info">
           <Avatar className="videoCard_avatar" alt={channel} src={channelimage}></Avatar>
           <div className='videoCard_text'>
               <h4>{title}</h4>
               <p>{channel}</p>
               <p>
                   {views} . {timestamp}
               </p>
           </div>

       </div>
    </div>
  )
}

export default VideoCard