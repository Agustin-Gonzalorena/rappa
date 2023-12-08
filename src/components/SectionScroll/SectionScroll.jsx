import styles from "./SectionScroll.module.css";
import React, { useEffect, useRef, useState, useCallback } from "react";
const SectionScroll = ({ data }) => {
  const [sectNumber, setSectNumber] = useState(1);
  const refs = useRef(data.map(() => React.createRef()));

  const handleScroll = useCallback(() => {
    let sumDistance = 200;

    // Calculamos la sección visible en función de las referencias dinámicas
    for (let i = 0; i < data.length; i++) {
      const sectionRect = refs.current[i].current.getBoundingClientRect();

      if (
        sectionRect.top - sumDistance >= 0 &&
        sectionRect.bottom <= window.innerHeight
      ) {
        setSectNumber(i + 1);
        break; // Una vez que encontramos la sección visible, salimos del bucle
      }
    }
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      <div className={styles.boxTitle}>
        <h2 className={`${styles.title}`}>Activities</h2>
      </div>
      <section className={styles.contain}>
        <div className={styles.left}>
          <div className={styles.boxImg}>
            <div className={styles.imgContain}>
              {data.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  alt={item.title}
                  className={styles.images}
                  style={
                    sectNumber == item.id ? { opacity: 1 } : { opacity: 0 }
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.boxRight}>
          {data.map((item, index) => (
            <div
              key={item.id}
              style={sectNumber == item.id ? { opacity: 1 } : { opacity: 0 }}
              className={styles.boxText}
            >
              <h3>{item.title}</h3>
              <div ref={refs.current[index]}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionScroll;
