import React from "react";
import { useState } from "react";
import AddProd from "./AddProd";
import { Link } from "react-router-dom";
import "../components/styles/room.css";
export default function Room(props) {
  const [flag, setFlag] = useState(false);
  const removeProduct = (indexOfRoom, indexOfProduct) => {
    props.room[indexOfRoom].product.splice(indexOfProduct, 1);
    props.setRoom([...props.room]);
  };
  return (
    <div id="room" style={{ backgroundColor: props.color }}>
      <div>
        <div id="roomName">
          <h3>{props.val.name}</h3>
          <h4>{props.val.type}</h4>
        </div>
        <div>
          <button
            className="btn inp"
            onClick={() => {
              setFlag(!flag);
            }}
          >
            add product
          </button>
        </div>
        <div>
          {" "}
          {flag && (
            <AddProd id='addpro'
              setFlag={setFlag}
              index={props.index}
              getProduct={props.getProduct}
              val={props.val}
              listOfProductsToAdd={props.listOfProductsToAdd}
            />
          )}
        </div>
        <Link to='/'><button className="inp btn" id="return">return</button></Link>
      </div>

      <div>
        {" "}
        {props.val.product.map((val, index) => {
          let condicion = val.condicion ? "green" : "red";
          return (
            <div>
              <button
                id="productBtn"
                onClick={() => {
                  props.changeCondicion(props.index, index);
                }}
                style={{ backgroundColor: condicion }}
              >
                {val.type}
              </button>{" "}
          <button
                id="closeIteam"
                onClick={() => {
                  removeProduct(props.index, index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
