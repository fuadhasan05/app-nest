import React from "react";
import MyProfileCard from "../components/MyProfileCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MyProfile = () => {
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