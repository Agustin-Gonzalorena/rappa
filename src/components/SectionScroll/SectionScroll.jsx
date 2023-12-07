"use client";
import styles from "./SectionScroll.module.css";
import { useEffect, useRef, useState } from "react";
const SectionScroll = ({ data }) => {
  const [sectNumber, setSectNumber] = useState(1);
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  // ...

  useEffect(() => {
    const handleScroll = () => {
      let sumDistance = 200;
      if (section1.current && section2.current && section3.current) {
        const section1Rect = section1.current.getBoundingClientRect();
        const section2Rect = section2.current.getBoundingClientRect();
        const section3Rect = section3.current.getBoundingClientRect();
        if (
          section1Rect.top - sumDistance >= 0 &&
          section1Rect.bottom <= window.innerHeight
        ) {
          setSectNumber(1);
        } else if (
          section2Rect.top - sumDistance >= 0 &&
          section2Rect.bottom <= window.innerHeight
        ) {
          setSectNumber(2);
        } else if (
          section3Rect.top - sumDistance >= 0 &&
          section3Rect.bottom <= window.innerHeight
        ) {
          setSectNumber(3);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={styles.boxTitle}>
        <h2 className={`${styles.title}`}>Activities</h2>
      </div>
      <section className={styles.contain}>
        <div className={styles.left}>
          <div className={styles.boxImg}>
            <div className={styles.imgContain}>
              <img
                src={data[0].img}
                alt={data[0].title}
                className={styles.images}
                style={sectNumber == 1 ? { opacity: 1 } : { opacity: 0 }}
              />
              <img
                src={data[1].img}
                alt={data[1].title}
                className={styles.images}
                style={sectNumber == 2 ? { opacity: 1 } : { opacity: 0 }}
              />
              <img
                src={data[2].img}
                alt={data[2].title}
                className={styles.images}
                style={sectNumber == 3 ? { opacity: 1 } : { opacity: 0 }}
              />
            </div>
          </div>
        </div>
        <div className={styles.boxRight}>
          <div
            style={sectNumber == 1 ? { opacity: 1 } : { opacity: 0 }}
            className={styles.boxText}
          >
            <h3>{data[0].title}</h3>
            <div ref={section1}>{data[0].text}</div>
          </div>
          <div
            style={sectNumber == 2 ? { opacity: 1 } : { opacity: 0 }}
            className={styles.boxText}
          >
            <h3>{data[1].title}</h3>
            <div ref={section2}>{data[1].text}</div>
          </div>
          <div
            style={sectNumber == 3 ? { opacity: 1 } : { opacity: 0 }}
            className={styles.boxText}
          >
            <h3>{data[2].title}</h3>
            <div ref={section3}>{data[2].text}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionScroll;
