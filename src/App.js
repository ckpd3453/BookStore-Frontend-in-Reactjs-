import "./App.css";
// import Login from "./Components/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import BookDescription from "./Components/BookDescription/BookDescription";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/bookDescription" element={<BookDescription />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Home /> */}
      <Cart />
    </div>
  );
}

export default App;
