import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Write from "./pages/Write";

const App = () => {

  const path = useLocation().pathname;

  return (
    <>
      {path === "/register" || path === "/login" ? null : <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<Write />} />
        <Route exact path="/post/:id" element={<Single />} />
      </Routes>
      {path === "/register" || path === "/login" ? null : <Footer />}
    </>
  );
}

export default App;