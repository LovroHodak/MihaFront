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
import Detail from "./components/Detail";
import Admin from "./components/Admin";
//data
import data from "./data";


function App() {
  const [initalState, setInitalState] = useState(data);
  const [products, setProducts] = useState(initalState);
  const [userData, setUserData] = useState([]);
  const [basketItems, setBasketItems] = useState(0);
  const [total, setTotal] = useState(0);

  let history = useHistory();

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
    setBasketItems(basketItems + 1);
    setTotal(total + products[id].price);
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
    setBasketItems(basketItems - 1);
    setTotal(total - products[id].price);
  };

  const handleShip = () => {
    setInitalState(products);
    setBasketItems(0);
    setTotal(0);
    history.push("/orderSuccess");
  };

  const addUserData = (e) => {
    e.preventDefault();
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + "/" + mm + "/" + yyyy;

    

    setUserData([{
      date: date,
      email: e.target.email.value,
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      street: e.target.street.value,
      city: e.target.city.value,
      itemName: '',
      howManyItems: 0,
      sameItemsPrice: 0,
      totalItemsPrice: 0
    }, ...userData])
    handleShip();
  };

 

  return (
    <div className="app">
      <Navbar basketItems={basketItems} total={total} />
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
          path="/detail/:id"
          render={(routeProps) => {
            return (
              <Detail
                products={products}
                initalState={initalState}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
                {...routeProps}
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
                total={total}
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
                addUserData={addUserData}
                total={total}
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
                <Route
          exact
          path="/admin"
          render={() => {
            return <Admin userData={userData} initialState={initalState} data={data} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
