import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {
  BrowserRouter,
  
  
  Route,
  Routes
} from "react-router-dom";
function App() {
  return (
    
      <BrowserRouter>
      <div className="App">

      <Header/>
      <Routes>
        <Route path="/search">
       
         
        </Route>
        {/*<Route path="/">
        <div className='app_page'>
        <Sidebar/>
        <RecommendedVideos/>
        </div>
  
         </Route>
  */}
  <Route path="/">
  <Sidebar className='app_page'/>
        <RecommendedVideos className='app_page'/>
    </Route>
      </Routes>
      </div>

      </BrowserRouter>
    
  );
}

export default App;
