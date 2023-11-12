import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./WebMobile.css";

const WebMobile = () => {
  const navigate = useNavigate();

  const onE44faa87780c097ca3cde4206add46Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <main className="webmobile">
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
      <button
        className="e44faa87780c097ca3cde4206add46"
        onClick={onE44faa87780c097ca3cde4206add46Click}
      >
        <img className="path-5-icon" alt="" src="/undefined1.png" />
      </button>
      <div className="group-div">
        <div className="component-3-2-parent">
          <button className="component-3-2">
            <img className="path-5-icon" alt="" src="/undefined4.png" />
            <button className="component-3-2-child" />
            <h3 className="dark1">DARK</h3>
          </button>
          <button className="component-5-2">
            <div className="component-4-1-group">
              <div className="component-4-1-group">
                <button className="component-4-1-item" />
              </div>
              <button className="rectangle-button" />
              <h3 className="chill1">CHILL</h3>
            </div>
          </button>
          <button className="component-6-2">
            <button className="button2" />
            <div className="rectangle-container">
              <button className="group-child1" />
              <h3 className="trippy1">TRIPPY</h3>
            </div>
          </button>
          <button className="component-6-3">
            <button className="button3" />
            <div className="rectangle-parent1">
              <button className="group-child2" />
              <h3 className="hard1">HARD</h3>
            </div>
          </button>
        </div>
        <div className="group-parent1">
          <h1 className="choose-container">
            <h2 className="choose1">CHOOSE</h2>
          </h1>
          <div className="your-group">
            <h2 className="your1">YOUR</h2>
            <h2 className="mood1">MOOD</h2>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WebMobile;
