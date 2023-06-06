import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import States from "./Components/States";
import Register from "./Pages/Register";
import ProductsPage from "./Pages/ProductsPage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SingleProductPage from "./Pages/SingleProductPage";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <States>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:category" element={<ProductsPage />} />
          <Route exact path="/product/:id" element={<SingleProductPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route exact path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </States>
  );
}

export default App;
