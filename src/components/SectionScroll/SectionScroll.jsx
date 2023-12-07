"use client";
import styles from "./SectionScroll.module.css";
import { useEffect, useRef, useState } from "react";
const SectionScroll = ({ data }) => {
  const sectionRefs = data.map(() => useRef(null));
  const [sectNumber, setSectNumber] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      let sumDistance = 200;
      const sectionRects = sectionRefs.map((ref) =>
        ref.current.getBoundingClientRect()
      );

      sectionRects.forEach((rect, index) => {
        if (rect.top - sumDistance >= 0 && rect.bottom <= window.innerHeight) {
          setSectNumber(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <>
      <div className={styles.boxTitle}>
        <h2 className={`${styles.title}`}>Activities</h2>
      </div>
      <section className={styles.contain}>
        <div className={styles.left}>
          <div className={styles.boxImg}>
            <div className={styles.imgContain}>
              {data.map((item, index) => {
                return (
                  <img
                    key={item.id}
                    src={item.img}
                    alt={item.title}
                    className={styles.images}
                    style={
                      sectNumber === index + 1 ? { opacity: 1 } : { opacity: 0 }
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.boxRight}>
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                style={
                  sectNumber === index + 1 ? { opacity: 1 } : { opacity: 0 }
                }
                className={styles.boxText}
              >
                <h3>{item.title}</h3>
                <div ref={sectionRefs[index]}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SectionScroll;
