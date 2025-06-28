import React from "react";
import menuData from "../data/Menu.json";

// Import your images
import img1 from "../assets/1 (2).jpg";
import img2 from "../assets/2 (2).jpg";
import img3 from "../assets/3 (2).jpg";
import img4 from "../assets/4 (2).jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpeg";
import img11 from "../assets/11.jpg";
import img12 from "../assets/12.jpg";
import img13 from "../assets/13.jpeg";
import img14 from "../assets/14.jpg";
import img15 from "../assets/15.jpeg";
import img16 from "../assets/16.jpg";

const images = [
  img1, img2, img3, img9, img4,
  img5, img7, img16, img8, img10,
  img11, img12, img13, img14, img15
];

const MenuList = () => {
  const { drinks, starter, maincourse } = menuData;

  const renderMenuItems = (items, category) =>
    items.map((item, index) => (
      <div className="card" key={`${category}-${index}`}>
        <img src={images[index % images.length]} alt={item.name} />
        <button>{category}</button>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>${item.price.toFixed(2)}</span>
      </div>
    ));

  return (
    <div className="menu">
      <div className="container">
        <div className="heading_section">
          <h1>Explore Our Signature Dishes</h1>
          <p>A carefully crafted selection of seasonal favorites.</p>
        </div>

        <h2>Drinks</h2>
        <div className="dishes_container">
          {renderMenuItems(drinks, "Drinks")}
        </div>

        <h2>Starters</h2>
        <div className="starter_container">
          {renderMenuItems(starter, "Starter")}
        </div>

        <h2>Main Course</h2>
        <div className="course_container">
          {renderMenuItems(maincourse, "Main Course")}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
