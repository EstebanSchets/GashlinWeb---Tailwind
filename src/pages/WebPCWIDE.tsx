import { FunctionComponent, useEffect } from "react";
import "./WebPCWIDE.css";

const WebPCWIDE: FunctionComponent = () => {
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
    <main className="webpc-wide">
      <img
        className="dalle-2023-11-11-203316-a"
        alt=""
        src="/LPImage1@2x.jpg"
      />
      <div className="div" />
      <div className="div1" />
      <div className="div2" />
      <div className="div3" />
      <div className="div4" />
      <div className="home-parent">
        <button className="home" data-animate-on-scroll>
          Home
        </button>
        <button className="music" data-animate-on-scroll>
          Music
        </button>
        <button className="login" data-animate-on-scroll>
          Login
        </button>
        <button className="qa" data-animate-on-scroll>{`Q&A`}</button>
        <button className="about" data-animate-on-scroll>
          About
        </button>
        <button className="merch" data-animate-on-scroll>
          Merch
        </button>
      </div>
      <div className="component-2-1">
        <h3 className="choose">{`CHOOSE. `}</h3>
        <h3 className="your">YOUR.</h3>
        <h3 className="mood">MOOD.</h3>
        <div className="rectangle-parent">
          <button className="group-child" />
          <button className="group-item" />
          <button className="component-6-1">
            <img className="icon" alt="" src="/18038192-59360731@2x.png" />
            <button className="component-6-1-child" />
            <h3 className="trippy">TRIPPY</h3>
          </button>
          <button className="component-3-1">
            <button className="component-3-1-child" />
            <button className="component-3-1-item" />
            <h3 className="dark">DARK</h3>
          </button>
          <h3 className="hard">HARD</h3>
          <button className="component-5-1">
            <div className="component-4-1">
              <button className="component-4-1-child" />
            </div>
            <button className="component-3-1-item" />
            <h3 className="chill">CHILL</h3>
          </button>
        </div>
      </div>
      <img className="component-13-1" alt="" src="/undefined6.png" />
      <img className="dalle-2023-11-12-165108-a" alt="" src="/undefined7.png" />
      <img className="webpc-wide-child" alt="" src="/group-21@2x.png" />
      <img className="webpc-wide-item" alt="" src="/group-4@2x.png" />
    </main>
  );
};

export default WebPCWIDE;
