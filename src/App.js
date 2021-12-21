import React from 'react';

import Navbar from "./componentes/Navbar/Navbar";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Inner from './Inner';
import Rotear from "./routes";


function App(){
  return(
    <div className='App'>
      <Navbar/>
      {/*<Header/>
      <Rotear/>*/}
      <Footer/>
    </div>
  );
}


export default App;
