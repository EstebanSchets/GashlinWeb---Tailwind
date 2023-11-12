import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WebMobileSearch.css";

const WebMobileSearch = () => {
  const navigate = useNavigate();

  const onCa1ebc695b5f509e80555d259dbb4bIconClick = useCallback(() => {
    navigate("/webmobile");
  }, [navigate]);

  return (
    <main className="webmobile-search">
      <img className="dalle-2023-11-11-203316-a" alt="" src="/LPImage@2x.jpg" />
      <div className="div" />
      <div className="div1" />
      <div className="div2" />
      <div className="div3" />
      <h2 className="path-3-parent">
        <img className="path-3-icon" alt="" src="/undefined.png" />
        <h2 className="welcome">WELCOME</h2>
      </h2>
      <div className="div4" />
      <img
        className="e44faa87780c097ca3cde4206add46-icon"
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
      <div className="group-parent">
        <button className="component-3-3-parent">
          <button className="component-3-3">
            <button className="component-3-3-child" />
            <button className="component-3-3-item" />
            <h3 className="dark">DARK</h3>
          </button>
          <button className="component-5-3">
            <button className="component-4-1-parent">
              <div className="component-4-1">
                <button className="component-4-1-child" />
              </div>
              <button className="group-child" />
              <h3 className="chill">CHILL</h3>
            </button>
          </button>
          <button className="component-6-4">
            <button className="button" />
            <div className="rectangle-parent">
              <button className="group-item" />
              <h3 className="trippy">TRIPPY</h3>
            </div>
          </button>
          <button className="component-6-5">
            <button className="button1" />
            <div className="rectangle-group">
              <button className="group-inner" />
              <h3 className="hard">HARD</h3>
            </div>
          </button>
        </button>
        <div className="group-container">
          <h2 className="choose-wrapper">
            <h2 className="choose">CHOOSE</h2>
          </h2>
          <div className="your-parent">
            <h2 className="your">YOUR</h2>
            <h2 className="mood">MOOD</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebMobileSearch;
