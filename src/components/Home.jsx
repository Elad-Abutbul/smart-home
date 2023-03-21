import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/styles/home.css";

export default function Home(props) {
  const nav = useNavigate();
  return (
    <div>
      <div>
        {" "}
        <h3 id="listHome">List of room:</h3>
      </div>
      <div className="allRooms">
        {props.room.map((val, index) => {
          return (
            <div>
              <div
                className="mapHome"
                onClick={() => {
                  nav(`Room/${val.name}/${index}`);
                }}
                style={{ backgroundColor: val.color }}
              >
                <h3>{val.name}</h3>
                <h4>{val.type}</h4>
              </div>{" "}
              <button id="closeIteam" onClick={() => props.removeRoom(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <Link to={"AddRoom"}>
          <button id="btnHome">+</button>
        </Link>
      </div>
    </div>
  );
}
