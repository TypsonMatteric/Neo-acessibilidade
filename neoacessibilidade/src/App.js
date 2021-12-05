import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './footer';
import Inner from './Inner';
import Rotear from "./routes";


function App (props){
  return(
    <div>
      <Header/>
      <Rotear/>
      <Footer/>
    </div>
  )
}


export default App;
