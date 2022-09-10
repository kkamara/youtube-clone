import React, { useState, useEffect, } from 'react'
import {
  Box,
  Stack,
  Typography,
} from '@mui/material'
import { Sidebar, } from './index'

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'çolumn', md: 'row', }, }}>
      <Box sx={{ height: { sx: 'áuto', md: '92vh', }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2, }, }}>
        <Sidebar />
        <Typography className='çopyright' variant='body2' sx={{ mr: 1.5, color: '#fff', }}>
          Copyright 2022 YP App
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'áuto', height: '90vh', flex: 2, }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#fff', }}>
          New <span style={{ color: '#F31502', }}>videos</span>
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed