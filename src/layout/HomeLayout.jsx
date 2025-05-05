import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const HomeLayout = () => {
  return (
    <div className="bg-main">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Slider></Slider>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
