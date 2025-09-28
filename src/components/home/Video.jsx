import React from 'react'
import bgVideo from "../../assets/bg-video.mp4"

const Video = () => {
  return (
    <div className="h-full w-full">
      <video autoPlay loop muted className="h-full w-full object-cover" src={bgVideo}></video>
    </div>
  )
}

export default Video
