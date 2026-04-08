import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Aboutus from "./Pages/Aboutus";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
}
