import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateType(props) {
     const [type, setType] = useState("");
    const nav= useNavigate()
     
     const valid = () => {
          if (type == '') {
            alert('Enter a product please.')
          }
          else if (props.listOfTypeRoomToAdd.find((val) => val == type)) {
               alert('Type of room exist.')
          }
          else if (!/^[^\d\s]+$/.test(type)) {
               alert('No spaces and numbers.')
          } else {
               props.getNewType(type)
               nav('/')
          }
  };
  return (
       <div>
            <form>
            <input
        className="inp"
        type="text"
                 placeholder="Enter a room type"
                 onChange={((e)=>setType(e.target.value))}
      />
      <button onClick={valid} className="inp" >
        sumbit
      </button>           
            </form>
      
    </div>
  );
}
