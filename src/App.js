import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import axios from "axios";
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
import Detail2 from "./components/Detail2";
import Admin from "./components/Admin";
import Footer from "./components/Footer";

function App() {
  //items
  const [initialState, setInitialState] = useState([]);
  const [products, setProducts] = useState([]);
  //orders
  const [userData, setUserData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  //navbar
  const [basketItems, setBasketItems] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products", { withCredentials: true })
      .then((response) => {
        setInitialState(response.data);
        setProducts(response.data);
      });

    axios
      .get("http://localhost:5000/api/orders", { withCredentials: true })
      .then((response) => {
        setUserData(response.data);
      });
  }, []);

  let history = useHistory();

  const handleEditAdd = (item) => {
    axios
      .patch(`http://localhost:5000/api/products/${item._id}`, {
        nrOfItems: item.nrOfItems - 1,
      })
      .then(() => {
        console.log("updatedItems");
      });
  };

  const handleEditDelete = (item) => {
    axios
      .patch(`http://localhost:5000/api/products/${item._id}`, {
        nrOfItems: item.nrOfItems + 1,
      })
      .then(() => {
        console.log("DeleteupdatedItems");
      });
  };

  const handleOrder = () => {
    const result = products
      .filter((product) => {
        return product.nrOfItems !== initialState[product.id].nrOfItems;
      })
      .map((item) => {
        return {
          name: item.name,
          id: item.id,
          nrOfItems: initialState[item.id].nrOfItems - item.nrOfItems,
          price:
            (initialState[item.id].nrOfItems - item.nrOfItems) * item.price,
          oneItemPrice: item.price,
        };
      });

    setOrderData(result);
  };

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
    setInitialState(products);
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

    let userInfo = {
      date: date,
      userEmail: e.target.email.value,
      userName: e.target.name.value,
      userLastName: e.target.lastname.value,
      userStreet: e.target.street.value,
      userCity: e.target.city.value,
      orderDetails: orderData,
      total: total,
    };

    axios
      .post("http://localhost:5000/api/newOrder", userInfo)
      .then((response) => {
        setUserData([userInfo, ...userData]);
      });
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
            return <Home products={products} />;
          }}
        />
        <Route
          exact
          path="/detail/:id"
          render={(routeProps) => {
            return (
              <Detail2
                handleEditDelete={handleEditDelete}
                handleEditAdd={handleEditAdd}
                products={products}
                initialState={initialState}
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
                handleEditDelete={handleEditDelete}
                handleEditAdd={handleEditAdd}
                products={products}
                initialState={initialState}
                handleAddToCart={handleAddToCart}
                handleDeleteFromCart={handleDeleteFromCart}
                total={total}
                handleOrder={handleOrder}
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
                initialState={initialState}
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
            return <Admin userData={userData} />;
          }}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default withRouter(App);
