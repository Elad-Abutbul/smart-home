import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/styles/addRoom.css";
export default function AddRoom(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [color, setColor] = useState("");
  const nav = useNavigate();
  const sendRoom = () => {
    if (name == "" || type == "" || color == "" || name.length > 5) {
      alert("Missing value fields");
    } else {
      props.getRoom(name, type, color);
    }
  };

  return (
    <div>
      <form>
        <div>
          {" "}
          <input
            className="inp"
            type="text"
            placeholder="Enter room name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <select
            className="inp"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="" selected disabled>
              Select Type
            </option>
            {props.listOfTypeRoomToAdd.map((val) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
        </div>
        <div>
          <input
            type="color"
            id="color"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="inp"
            id="btn"
            onClick={() => {
              sendRoom();
              nav("/");
            }}
          >
            create
          </button>
        </div>
      </form>
    </div>
  );
}
