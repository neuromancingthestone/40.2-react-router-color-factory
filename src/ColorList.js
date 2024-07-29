import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css"

function ColorList({colorData}) {

  return (    
    <div className="ColorList">
      <h2>Welcome to the color factory.</h2> 
      <Link to="/colors/addcolor">Add A Color</Link><br/><br/>
      {colorData.map((c, ind) => (
        <p key={ind}>
          <Link to={`/colors/${c.name}`}>{c.name}</Link><br/>
        </p>
      ))}
    </div>
  );
}

export default ColorList;