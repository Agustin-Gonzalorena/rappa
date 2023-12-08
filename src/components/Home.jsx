import React from "react";
import styles from "./Home.module.css";
import SectionScroll from "./SectionScroll/SectionScroll";

const Home = () => {
  const sectionScroolAnimation = [
    {
      id: 1,
      img: "https://www.terravolcano.com/wp-content/uploads/2023/09/Copia-de-IMG_3425.jpg",
      title: "Trekking to the volcano Villarrica",
      text: (
        <p>
          We invite you to an exciting trekking towards the imposing volcano
          Villarrica organized by our friend page . Prepare for an unforgettable
          adventure as we climb steep trails and take in stunning panoramic
          views.
        </p>
      ),
    },
    {
      id: 2,
      img: "https://iili.io/JI1j2xp.md.jpg",
      title: "Excursion to the lanin",
      text: (
        <p>
          We extend you a cordial invitation to join an exciting excursion to
          this majestic volcano, organized by our friend page . Prepare for an
          unforgettable experience as we explore captivating trails and marvel
          at the grandeur of this natural wonder.
        </p>
      ),
    },
    {
      id: 3,
      img: "https://iili.io/JI1SNbn.md.jpg",
      title: "Car rental",
      text: (
        <p>
          Discover the freedom to explore at your own pace with our car rental
          service! At , we offer you the key to live a unique experience while
          you explore every corner you want. Why settle for predefined
          itineraries when you can chart your own adventure?
        </p>
      ),
    },
  ];
  return (
    <>
      <div className={styles.fondo}></div>
      <SectionScroll data={sectionScroolAnimation} />
      <div className={styles.fondo}></div>
    </>
  );
};

export default Home;
