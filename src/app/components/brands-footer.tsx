"use client";

import React from "react";
import styles from "../styles/Home.module.css";

const logos = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/4.png",
  "/5.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/9.png",
  "/10.png",
    "/11.png",
];

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoCarousel}>
        <div className={styles.logoTrack}>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className={styles.logo}
            />
          ))}
          {/* Duplicate logos to create a seamless scrolling effect */}
          {logos.map((logo, index) => (
            <img
              key={index + logos.length}
              src={logo}
              alt={`Logo ${index}`}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;