import "./App.css";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import AddRoom from "./components/AddRoom";
import Room from "./components/Room";
import Nav from "./components/Nav";
import CreateProducts from "./components/CreateProducts";
import CreateType from "./components/CreateType";

function App() {
  const [room, setRoom] = useState([]);
  const [listOfProductsToAdd, setListOfProductsToAdd] = useState([
    "Lamp",
    "Boiler",
    "Air-Conditioner",
    "Stereo-System",
  ]);
  const [listOfTypeRoomToAdd, setListOfTypeRoomToAdd] = useState([
    "kitchen",
    "bathroom",
    "bedroom",
  ]);
  const getRoom = (name, type, color) => {
    setRoom([...room, { name: name, type: type, color: color, product: [] }]);
  };
  const getProduct = (indexOfRoom, product) => {
    let temp = { condicion: false, type: product };
    room[indexOfRoom].product.push(temp);
    setRoom([...room]);
  };
  const changeCondicion = (indexOfRoom, indexOfProduct) => {
    room[indexOfRoom].product[indexOfProduct].condicion =
      !room[indexOfRoom].product[indexOfProduct].condicion;
    setRoom([...room]);
  };
  const removeRoom = (indexOfRoom) => {
    room.splice(indexOfRoom, 1);
    setRoom([...room]);
  };
  const getNewProduct = (product) => {
    setListOfProductsToAdd([...listOfProductsToAdd,product])
  }
  const getNewType = (type) => {
    setListOfTypeRoomToAdd([...listOfTypeRoomToAdd,type])
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>Smart Home</h1>
        <Routes>
          <Route
            path="*"
            element={<Home room={room} removeRoom={removeRoom} />}
          />
          <Route
            path="/AddRoom"
            element={
              <AddRoom
                getRoom={getRoom}
                listOfTypeRoomToAdd={listOfTypeRoomToAdd}
              />
            }
          />
          {room.map((val, index) => {
            return (
              <Route
                path={`/Room/${val.name}/${index}`}
                element={
                  <Room
                    room={room}
                    val={val}
                    setRoom={setRoom}
                    index={index}
                    color={val.color}
                    getProduct={getProduct}
                    changeCondicion={changeCondicion}
                    listOfProductsToAdd={listOfProductsToAdd}
                  />
                }
              />
            );
          })}
          <Route path="/createProducts" element={<CreateProducts getNewProduct={getNewProduct} listOfProductsToAdd={listOfProductsToAdd} />} />
          <Route path="/createType" element={<CreateType getNewType={getNewType} listOfTypeRoomToAdd={listOfTypeRoomToAdd} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
