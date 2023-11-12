import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WebMobile.css";

const WebMobile = () => {
  const navigate = useNavigate();

  const onE44faa87780c097ca3cde4206add46Click = useCallback(() => {
    navigate("/webmobilesearch");
  }, [navigate]);

  return (
    <main className="webmobile">
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
      <button
        className="e44faa87780c097ca3cde4206add46"
        onClick={onE44faa87780c097ca3cde4206add46Click}
      >
        <img
          className="e44faa87780c097ca3cde4206add46-icon"
          alt=""
          src="/undefined1.png"
        />
      </button>
      <div className="group-parent">
        <div className="component-3-2-parent">
          <button className="component-3-2">
            <img
              className="e44faa87780c097ca3cde4206add46-icon"
              alt=""
              src="/undefined4.png"
            />
            <button className="component-3-2-child" />
            <h3 className="dark">DARK</h3>
          </button>
          <button className="component-5-2">
            <div className="component-4-1-parent">
              <div className="component-4-1-parent">
                <button className="component-4-1-child" />
              </div>
              <button className="group-child" />
              <h3 className="chill">CHILL</h3>
            </div>
          </button>
          <button className="component-6-2">
            <button className="button" />
            <div className="rectangle-parent">
              <button className="group-item" />
              <h3 className="trippy">TRIPPY</h3>
            </div>
          </button>
          <button className="component-6-3">
            <button className="button1" />
            <div className="rectangle-group">
              <button className="group-inner" />
              <h3 className="hard">HARD</h3>
            </div>
          </button>
        </div>
        <div className="group-container">
          <h1 className="choose-wrapper">
            <h2 className="choose">CHOOSE</h2>
          </h1>
          <div className="your-parent">
            <h2 className="your">YOUR</h2>
            <h2 className="mood">MOOD</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebMobile;
