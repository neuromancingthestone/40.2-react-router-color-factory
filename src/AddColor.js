import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./AddColor.css"

function AddColor({addNewColor}) {

  const navigate = useNavigate();

  const INITIAL_STATE = {
    color: "#000000",
    name: "",
  }
  
  const [newColorFormData, setNewColorFormData] = useState(INITIAL_STATE);
  
  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewColorFormData(data => ({
      ...data,
      [name]: value
    }))    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewColor({...newColorFormData});
    setNewColorFormData(INITIAL_STATE);
    navigate("/colors");
  } 

  return (
    <div className="AddColor">
      <div className="child">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input 
            id="name"
            type="text"
            name="name"
            placeholder="Color Name"
            value={newColorFormData.name}
            onChange={handleChange}
          />           
          <label htmlFor="color">Color value: </label>
          <input 
            id="value"
            type="color"
            name="value"
            placeholder="Teal"
            value={newColorFormData.value}
            onChange={handleChange}
          />  
          <button>Add Color</button>
        </form>
      </div>
    </div>
  )
}

export default AddColor;