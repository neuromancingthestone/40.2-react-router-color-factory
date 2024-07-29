import './App.css';
import {v4 as uuid} from "uuid";
import React, {useState} from 'react';
import RouteList from './RouteList';
import { BrowserRouter } from 'react-router-dom';
import colorData from "./colorData";

function App() {
  const INITIAL_STATE = colorData;
  const [colors, setColors] = useState(INITIAL_STATE);
  const addNewColor = (newColor) => {
    setColors(colors => [...colors, {...newColor, id: uuid()}])
  }  

  return (
    <div className="App">    
      <BrowserRouter>
        <RouteList colors={colors} addNewColor={addNewColor} />  
      </BrowserRouter>
    </div>          
  );
}

export default App;
