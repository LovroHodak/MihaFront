import React, { useState } from "react";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
//style
import "./App.css";
//components
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Info from "./components/Info";
import Order from "./components/Order";
import OrderSuccess from "./components/OrderSuccess";

//data
import data from "./data";


function App() {
  const [initalState, setInitalState] = useState(data);
  const [products, setProducts] = useState(initalState);
  const [userData, setUserData] = useState([]);
  const [basketItems, setBasketItems] = useState(0)

  const handleAddToCart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          nrOfItems: product.nrOfItems - 1,
        };
        return updatedProduct;
      }
      return product;
    });
    setProducts(newProducts);
    setBasketItems(basketItems + 1)
  };

  const handleDeleteFromCart = (id) => {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        const updatedProduct = {
          ...product,
          nrOfItems: product.nrOfItems + 1,
        };
        return updatedProduct;
      }
      return product;
    });
    setProducts(newProducts);
    setBasketItems(basketItems - 1)
  };

  let history = useHistory();

  const handleShip = () => {
    setInitalState(products);
    setBasketItems(0)
    history.push("/orderSuccess");
  };

  const addData = (e) => {
    e.preventDefault();
    setUserData([String(e.target.email.value), ...userData]);
    handleShip();
  };

  

  return (
    <div className="app">
      <Navbar basketItems={basketItems} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Home
                products={products}
                initalState={initalState}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            );
          }}
        />
        <Route
          exact
          path="/info"
          render={() => {
            return <Info />;
          }}
        />
        <Route
          exact
          path="/cart"
          render={() => {
            return (
              <Cart
                products={products}
                initalState={initalState}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
              />
            );
          }}
        />
        <Route
          exact
          path="/order"
          render={() => {
            return (
              <Order
                products={products}
                initalState={initalState}
                addData={addData}
              />
            );
          }}
        />
        <Route
          exact
          path="/orderSuccess"
          render={() => {
            return <OrderSuccess userData={userData} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
