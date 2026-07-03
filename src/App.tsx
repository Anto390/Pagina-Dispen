import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toaster from "./components/Toaster";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Toaster />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
