import React, {useState, useEffect} from 'react'
import { Box, Typography } from "@mui/material"
import { fetchAPI } from '../utils/fetchAPI'
import Videos from './Videos'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then(data => setVideos(data.items))
  }, [searchTerm])

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search Results: <span style={{color: 'red'}}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed