import { useEffect } from "react";
import "./NavBar.css";

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
            targetElement.classList.add("animate");
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
    <div className="home-parent">
      <button className="home1" data-animate-on-scroll>
        Home
      </button>
      <button className="music1" data-animate-on-scroll>
        Music
      </button>
      <button className="login1" data-animate-on-scroll>
        Login
      </button>
      <button className="qa1" data-animate-on-scroll>{`Q&A`}</button>
      <button className="about1" data-animate-on-scroll>
        About
      </button>
      <button className="merch1" data-animate-on-scroll>
        Merch
      </button>
    </div>
  );
};

export default NavBar;
