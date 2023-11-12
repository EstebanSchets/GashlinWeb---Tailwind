import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WebMobileSearch.css";

const WebMobileSearch = () => {
  const navigate = useNavigate();

  const onCa1ebc695b5f509e80555d259dbb4bIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main className="webmobile-search">
      <img
        className="dalle-2023-11-11-203316-a1"
        alt=""
        src="/LPImage@2x.jpg"
      />
      <div className="div5" />
      <div className="div6" />
      <div className="div7" />
      <div className="div8" />
      <h2 className="path-3-group">
        <img className="path-3-icon1" alt="" src="/undefined.png" />
        <h2 className="welcome1">WELCOME</h2>
      </h2>
      <div className="div9" />
      <img
        className="e44faa87780c097ca3cde4206add46-icon1"
        alt=""
        src="/undefined1.png"
      />
      <nav className="navbarmobile">
        <img className="path-4-icon" alt="" src="/undefined2.png" />
        <a className="home">HOME</a>
        <a className="music">MUSIC</a>
        <a className="merch">MERCH</a>
        <a className="about">ABOUT</a>
        <a className="qa">{`Q&A`}</a>
        <a className="login">LOGIN</a>
        <i className="terms-conditions">{`TERMS & CONDITIONS`}</i>
        <img
          className="ca1ebc695b5f509e80555d259dbb4b-icon"
          alt=""
          src="/undefined3.png"
          onClick={onCa1ebc695b5f509e80555d259dbb4bIconClick}
        />
      </nav>
      <div className="group-div">
        <button className="component-3-3-parent">
          <button className="component-3-3">
            <button className="component-3-3-child" />
            <button className="component-3-3-item" />
            <h3 className="dark1">DARK</h3>
          </button>
          <button className="component-5-3">
            <button className="component-4-1-group">
              <div className="component-4-11">
                <button className="component-4-1-item" />
              </div>
              <button className="rectangle-button" />
              <h3 className="chill1">CHILL</h3>
            </button>
          </button>
          <button className="component-6-4">
            <button className="button2" />
            <div className="rectangle-container">
              <button className="group-child1" />
              <h3 className="trippy1">TRIPPY</h3>
            </div>
          </button>
          <button className="component-6-5">
            <button className="button3" />
            <div className="rectangle-parent1">
              <button className="group-child2" />
              <h3 className="hard1">HARD</h3>
            </div>
          </button>
        </button>
        <div className="group-parent1">
          <h2 className="choose-container">
            <h2 className="choose1">CHOOSE</h2>
          </h2>
          <div className="your-group">
            <h2 className="your1">YOUR</h2>
            <h2 className="mood1">MOOD</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebMobileSearch;
