import React from "react";
import { Link, Navigate } from "react-router-dom";

import "./Color.css"

function Color({color}) {

  if (!color) {
    return <Navigate to="/colors" />
  }

  return (
    <div className="Color" style={{backgroundColor: `${color.value}`}}>
      <div>
        <p>THIS IS {color.name.toUpperCase()}</p><br/>
        <Link to="/dogs">Go Back</Link>          
      </div>     
    </div>

  )
}

export default Color;