import React from 'react'
import Stack from '@mui/material/Stack'
import { Link } from 'react-router-dom'
// import { logo } from '../utils/constants'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './youtube_icon.png'
import SearchBar from './SearchBar';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => (
  <Stack direction="row" alignItems='center'pl={4}
  sx={{position: 'sticky', top: 0, justifyContent: 'space-between'}}>
    <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
      <MenuIcon />
      <img src={Logo} alt='logo' height={80} style={{ marginLeft: '10px'}} />
    </Link>

    <SearchBar />

    <div style={{ display: 'flex', gap: '1.6rem', paddingRight: '4rem'}}>
    <VideoCallOutlinedIcon fontSize= 'medium' />
    <NotificationsNoneOutlinedIcon fontSize= 'medium' />
    </div>
  </Stack>
)

export default Navbar

