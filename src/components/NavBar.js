import { useEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
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
    <div className={styles.homeParent}>
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
      <button className={styles.about} data-animate-on-scroll>
        About
      </button>
      <button className={styles.merch} data-animate-on-scroll>
        Merch
      </button>
    </div>
  );
};

export default NavBar;
