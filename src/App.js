import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action,originals,Horror} from './Components/RowPost/urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title='NetflixOrginals' url={originals} />
      <RowPost title='Action' isSmall url={action}/>
      <RowPost title='Horror' isSmall url={Horror}/>
    </div>
  );
}

export default App;
