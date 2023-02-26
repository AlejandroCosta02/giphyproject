import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";

function App() {

  const [dataGif, setDataGif] = useState([])
  const handleEffect = (data) => {
    setDataGif(data)
  }
  return (
    <div className="App flex flex-col h-screen justify-between">
        <Header 
          className='h-10'
          handleClick = {handleEffect}/>
        <Display dataGif={dataGif}/>
      <Footer className='h-10 '/>

    </div>
  );
}

export default App;