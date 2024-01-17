import React, {useState, useEffect} from 'react'
import { Box, Stack, Typography } from "@mui/material"
import { fetchAPI } from '../utils/fetchAPI'
import SideBar from './SideBar'
import Videos from './Videos'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, width: '14vw', px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        {selectedCategory}
      </Typography>

      <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed