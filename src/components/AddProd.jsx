import React from "react";
import { useState } from "react";

export default function AddProd(props) {
  const [product, setProduct] = useState("");
  const send = () => {
    if (props.val.product.length > 4) {
      alert("5 products in each room.");
    } else if (product == "") {
      alert("Error choose product.");
    } else if (
      props.val.product.find((val) => val.type == product) &&
      product == "Stereo-System"
    ) {
      alert("Stereo-System can be once in each room.");
    } else {
      props.getProduct(props.index, product);
    }
  };
  return (
    <div>
      <select onChange={(e) => setProduct(e.target.value)} className="inp">
        <option value="" selected disabled>
          select type of product
        </option>
        {props.listOfProductsToAdd.map((val) => {
          return (
            <>
          {props.val.type!='bathroom'&&val=='Boiler'?'': <option value={val}>{val}</option>}   
            </>
          );
        })}
      </select>
      <button id="close" onClick={() => props.setFlag(false)}>
        x
      </button>
      <div>
        {" "}
        <button
          className="btn inp"
          onClick={() => {
            props.setFlag(false);
            send(props.index);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
