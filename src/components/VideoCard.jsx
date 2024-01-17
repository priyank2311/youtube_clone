import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, 
demoChannelTitle, demoVideoTitle, demoProfilePicture} from '../utils/constants'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width: 300, height: 180, border: 'none', borderRadius: '10px'}}
        />
      </Link>
      <CardContent sx={{ height: '60px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#000">
            {snippet?.title.slice(0, 25) || demoVideoTitle.slice(0, 25)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard