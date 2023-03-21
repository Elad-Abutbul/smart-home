import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProducts(props) {
     const [product, setProduct] = useState("");
    const nav= useNavigate()
     const valid = () => {
          if (product == '') {
            alert('Enter a product please.')
          }
          else if (props.listOfProductsToAdd.find((val) => val == product)){
               alert('Produt exist')
          }
          else if (!/^[^\d\s]+$/.test(product)) {
               alert('No spaces and numbers.')
          } else {
               props.getNewProduct(product)
nav('/')
          }
  };
  return (
       <div >
            <form><input
        className="inp"
        type="text"
                 placeholder="Enter a product"
                 onChange={((e)=>setProduct(e.target.value))}
      />
      <button onClick={valid} className="inp" >
        sumbit
      </button>
</form>
          </div>
  );
}
