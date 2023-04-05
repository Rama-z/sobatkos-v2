import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "src/styles/SliderInterior.module.css";
import image1 from "src/assets/images/foto-kos-min.jpg";
import image2 from "src/assets/images/foto-kos-min.jpg";
import image3 from "src/assets/images/foto-kos-min.jpg";
import image4 from "src/assets/images/foto-kos-min.jpg";
import image5 from "src/assets/images/foto-kos-min.jpg";
import image6 from "src/assets/images/foto-kos-min.jpg";
import image7 from "src/assets/images/foto-kos-min.jpg";
import image8 from "src/assets/images/foto-kos-min.jpg";
import image9 from "src/assets/images/foto-kos-min.jpg";

export default function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const images = [
    {
      src: image1,
      alt: "Image 1",
    },
    {
      src: image2,
      alt: "Image 2",
    },
    {
      src: image3,
      alt: "Image 3",
    },
    {
      src: image4,
      alt: "Image 4",
    },
    {
      src: image5,
      alt: "Image 5",
    },
    {
      src: image6,
      alt: "Image 6",
    },
    {
      src: image7,
      alt: "Image 7",
    },
    {
      src: image8,
      alt: "Image 8",
    },
    {
      src: image9,
      alt: "Image 9",
    },
  ];
  const nextSlide = () => {
    clearInterval(intervalId);
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 3000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
      setIntervalId(null);
    };
  }, [activeIndex]);
  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <Image
          key={index}
          className={
            index === activeIndex ? `${styles.active} ` : `${styles.inactive} `
          }
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
