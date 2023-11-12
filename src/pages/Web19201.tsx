import { FunctionComponent } from "react";
import SearchSection from "../components/SearchSection";
import WelcomeSection from "../components/WelcomeSection";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import "./Web19201.css";

const Web19201: FunctionComponent = () => {
  return (
    <main className="webpc">
      <img
        className="dalle-2023-11-11-203316-a2"
        alt=""
        src="/LPImage1@2x.jpg"
      />
      <div className="div10" />
      <SearchSection />
      <div className="div11" />
      <div className="div12" />
      <div className="div13" />
      <WelcomeSection />
      <img className="path-2-icon" alt="" src="/undefined4.png" />
      <Logo />
      <div className="div14" />
      <NavBar />
      <div className="component-2-1">
        <button className="component-2-1-child" />
        <h3 className="choose2">{`CHOOSE. `}</h3>
        <h3 className="your2">YOUR.</h3>
        <h3 className="mood2">MOOD.</h3>
        <button className="component-2-1-item" />
        <div className="component-6-1">
          <img className="icon" alt="" src="/18038192-59360731@2x.png" />
          <button className="component-6-1-child" />
          <h3 className="trippy2">TRIPPY</h3>
        </div>
        <div className="component-3-1">
          <button className="component-3-1-child" />
          <button className="component-3-1-item" />
          <h3 className="dark2">DARK</h3>
        </div>
        <h3 className="hard2">HARD</h3>
        <div className="component-5-1">
          <div className="component-4-12">
            <button className="component-4-1-inner" />
          </div>
          <button className="component-3-1-item" />
          <h3 className="chill2">CHILL</h3>
        </div>
      </div>
    </main>
  );
};

export default Web19201;
