

import React from "react";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom"
import AllMeetups from "./Pages/AllMeetups";
import NewMeetup from "./Pages/NewMeetup";
import Favorites from "./Pages/Favorites";
import Navbar from "./Components/layout/Navbar";
import Layout from "./Components/layout/Layout"
import MovieApi from "./Pages/MovieApi";
function App() {
  return (
    <div>
      <Layout>
      
      <Routes>
     <Route path="/" element = {<AllMeetups/>}/>
     <Route path="/MovieAPi" element = {<MovieApi/>}/>
     <Route path="/favorites" element = {<Favorites/>}/>
     </Routes>
     </Layout>
     
    </div>
  );
}

export default App;
