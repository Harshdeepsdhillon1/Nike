// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Header from './Pages/Home/Header';
import Hero from './Pages/Home/Hero';
import Carousel from './components/Carousel';

const homeSlides = [
  { url: "/images/shoes-1.png", title: "Air Max 90" },
  { url: "/images/shoes-1.png", title: "Airforce 1" },
  { url: "/images/shoes-1.png", title: "Jordan Retro" },
  { url: "/images/shoes-1.png", title: "Court Vision" }
];
const heading = "Featured Products";
const CategorySlides = [
  { url: "/images/man.png", title: "Men" },
  { url: "/images/woman.png", title: "Women" },
  { url: "/images/teen.png", title: "Teens" },
  { url: "/images/kid.png", title: "Kids" },
  { url: "/images/baby.png", title: "Bay" }
];
const CategoryHeading = "Shop by Category"
const App = () => {
  return (
    <div>
      <Navbar />
      {/* Add more components below */}
      <Header />
      <Carousel slides={homeSlides} heading={heading}/>
      <Hero
        heading="Experience the Future of Sneakers"
        para="Step into the future of sneakers—where innovation meets style. Experience the next evolution in footwear today!"
        imageUrl="/images/shoes-1.png"
        altText="Nike Air Max Shoe"
      />
      <Carousel slides={CategorySlides} heading={CategoryHeading}/>
    </div>
  );
};

export default App;
