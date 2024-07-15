import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Tracking from "./components/Tracking/Tracking";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Home from "./components/Onboarding/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/tracking"
          element={<PrivateRoute component={Tracking} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
