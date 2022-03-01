import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


function Header() {
  return (
    <div className="header">
      <div className="header_left">
       <MenuIcon/>
       <img   className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt=""/>
      </div>
      <div className="header_input">
       <input placeholder="Search" type="text" />
       <SearchIcon className="header_inputButton"/>
       </div>
       <div className="header_icons">
       <VideoCallIcon className="header_icon"/>
       <AppsIcon className='header_icon'/>
       <NotificationsIcon className="header_icon"/>
       <AccountCircleIcon  className="header_icon" src="https://avatars.githubusercontent.com/u/89015579?s=400&u=0cc23458b8eaed9d01c9d61ed09174f13b95bfde&v=4y"/>
        </div>
        </div>
  )
}

export default Header