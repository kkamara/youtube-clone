import React from 'react'
import { Box, CardContent, CardMedia, Typography, } from '@mui/material'
import { CheckCircle, } from '@mui/icons-material'
import { Link, } from 'react-router-dom'
import he from 'he'

import { demoProfilePicture, demoChannelTitle, } from '../utils/constants'

const ChannelCard = ({ channelDetail, marginTop, }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md:'320px', },
        height: '326ox',
        margin: 'auto',
        marginTop: '-93px',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={he.decode(channelDetail?.snippet?.title)}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3', }}
          />
          <Typography variant='h6'>
            {(channelDetail?.snippet?.channelTitle && he.decode(channelDetail?.snippet?.channelTitle)) || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 14, color: 'gray', m1: '5px', }} />
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
