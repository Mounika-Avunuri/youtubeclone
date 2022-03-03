import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
  return (
      
    <div className="searchPage">
       <div className='searchPage_filter'>
<TuneOutlinedIcon/>
<h2>FILTER</h2>
            </div>
            <hr/>
  <ChannelRow 
  image="https://i.ytimg.com/vi/YwA7x2Py5DQ/maxresdefault.jpg"
  Channel="Clever Programmer"
  verified
  subs="1.1M"
  noOfVideos={382}
  description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
  />
  <VideoRow 
  views="1.4M"
  subs="1.1M"
  description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
timestamp="50 seconds ago"
  Channel="Clever Programmer"
 title="how to become web developer"
  image="https://i.ytimg.com/vi/YwA7x2Py5DQ/maxresdefault.jpg"

 
  />
  <VideoRow 
  views="1.4M"
  subs="1.1M"
  description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
timestamp="50 seconds ago"
  Channel="Clever Programmer"
 title="how to become web developer"
  image="https://i.ytimg.com/vi/YwA7x2Py5DQ/maxresdefault.jpg"

 
  />
  <VideoRow 
  views="1.4M"
  subs="1.1M"
  description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
timestamp="50 seconds ago"
  Channel="Clever Programmer"
 title="how to become web developer"
  image="https://i.ytimg.com/vi/YwA7x2Py5DQ/maxresdefault.jpg"

 
  />    
        
        <hr/>
        <VideoRow/>
    </div>
  )
}

export default SearchPage;