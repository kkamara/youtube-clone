import React, { useState, useEffect, } from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import { useParams, } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos, } from './index'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm, } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then(data => {
      if (!data || !data.items) {
        alert('Unsuccessful videos request made.')
      }
      setVideos(data.items)
    })
    .catch(err => alert(err.message))
  }, [searchTerm,])

  return (
    <Box p={2} sx={{ overflowY: 'áuto', height: '90vh', flex: 2, }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff', }}>
        Search Results for: <span style={{ color: '#F31502', }}>{searchTerm}</span> videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
