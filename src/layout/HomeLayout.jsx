import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Apps from "../components/Apps";
import Newsletter from "../components/Newsletter";

const HomeLayout = () => {
  // Set dynamic title
  useEffect(() => {
    document.title = "Home | AppNest";
  }, []);
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Slider></Slider>
        <Outlet></Outlet>
        <Apps></Apps>
        <Newsletter></Newsletter>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
