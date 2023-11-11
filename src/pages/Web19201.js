import { useEffect } from "react";
import styles from "./Web19201.module.css";

const Web19201 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <main className={styles.web19201}>
      <img
        className={styles.dalle20231111203316A}
        alt=""
        src="/LPImage@2x.jpg"
      />
      <button className={styles.web19201Child} />
      <button className={styles.button} />
      <button className={styles.web19201Item} />
      <button className={styles.web19201Inner} />
      <div className={styles.div} />
      <img className={styles.lineIcon} alt="" src="/line-1.svg" />
      <button className={styles.home} data-animate-on-scroll>
        Home
      </button>
      <button className={styles.music} data-animate-on-scroll>
        Music
      </button>
      <button className={styles.login} data-animate-on-scroll>
        Login
      </button>
      <button className={styles.qa} data-animate-on-scroll>{`Q&A`}</button>
      <input className={styles.path1} type="text" />
      <h1 className={styles.search}>Search...</h1>
      <div className={styles.div1} />
      <div className={styles.div2} />
      <div className={styles.div3} />
      <h2 className={styles.welcome}>WELCOME</h2>
      <div className={styles.lineDiv} />
      <div className={styles.web19201Child1} />
      <img className={styles.web19201Child2} alt="" src="/undefined.png" />
      <img className={styles.web19201Child3} alt="" src="/undefined1.png" />
      <img className={styles.web19201Child4} alt="" src="/undefined2.png" />
      <div className={styles.web19201Child5} />
      <div className={styles.web19201Child6} />
      <div className={styles.div4} />
      <button className={styles.about} data-animate-on-scroll>
        About
      </button>
      <button className={styles.merch} data-animate-on-scroll>
        Merch
      </button>
      <h3 className={styles.choose}>{`CHOOSE. `}</h3>
      <h3 className={styles.your}>YOUR.</h3>
      <h3 className={styles.mood}>MOOD.</h3>
      <button className={styles.rectangleButton} />
      <button className={styles.web19201Child7} />
      <button className={styles.web19201Child8} />
      <button className={styles.web19201Child9} />
      <h3 className={styles.trippy}>TRIPPY</h3>
      <h3 className={styles.dark}>DARK</h3>
      <h3 className={styles.hard}>HARD</h3>
      <h3 className={styles.chill}>CHILL</h3>
    </main>
  );
};

export default Web19201;
