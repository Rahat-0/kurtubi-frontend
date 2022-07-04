import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navber from "./components/navber/Navber";
import Home from "./pages/home/Home";

function App() {

  return (
    <BrowserRouter >
      <Navber />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
