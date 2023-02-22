import "./style.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Registration from "./component/Registration";
import ErrorPage from "./component/ErrorPage";
import Logout from "./component/Logout";

import Menu from "./component/Menu";
import Product from "./Product";
import Cart from "./Cart";




function App() {
  return (
    <div className="App">
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<Product/>} />
      

      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/logout" element={<Logout />}/>
      <Route path="*" element={<ErrorPage />}/>
    </Routes>
   
    </div>
  );
}

export default App;
