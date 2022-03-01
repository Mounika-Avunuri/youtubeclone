import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
  return (
    <div className="sidebar">
        

        <SidebarRow selected Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subcription"/>
        <hr/>
        <SidebarRow Icon={ VideoLibraryIcon} title=" VideoLibrary"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={OndemandVideoIcon} title="OndemandVideo"/>
        <SidebarRow Icon={WatchLaterIcon} title="WatchLater"/>
        <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="ThumbUpAltOutlined"/>
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="ExpandMoreOutlined"/>

    </div>
  )
}

export default Sidebar