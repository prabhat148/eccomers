import React from "react";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider.jsx";
import Announcement from "../component/Announcement.jsx";
import Cotogory from "../component/Cotogory.jsx";
import Products from "../component/Products";
import NewsLetter from "../component/NewsLetter";
import Fotter from "../component/Fotter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Cotogory/>
      <Products/>
      <NewsLetter/>
      <Fotter/>
    </div>
  );
};

export default Home;
