import React, { useEffect } from "react";
import MyProfileCard from "../components/MyProfileCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyProfile = () => {

  // Set dynamic title
    useEffect(() => {
      document.title = "Profile | AppNest";
    }, []);

  return (
    <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <MyProfileCard></MyProfileCard>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
    </div>
  );
};

export default MyProfile;