import React, { useState } from 'react'
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };

  return (
    <Paper component='form' onSubmit={onHandleSubmit} sx={{ display: 'flex', justifyContent: 'space-around', 
      borderRadius: 20, pl: 2, border: '1px solid #e3e3e3', mr: { sm: 5 }, boxShadow: 'none'}}>
        <input className='search-bar' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        <IconButton type='submit' sx={{p:'10px', cursor: 'pointer'}} aria-label=''>
          <SearchIcon />
        </IconButton>
    </Paper>
  )
}

export default SearchBar