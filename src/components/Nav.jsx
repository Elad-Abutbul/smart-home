import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to={"/"}>
          <button className="btn">Home</button>
        </Link>
        <Link to={"/createProducts"}>
          <button className="btn">create products</button>
        </Link>
        <Link to={"/createType"}>
          <button className="btn">create type</button>
        </Link>
      </nav>
    </div>
  );
}
