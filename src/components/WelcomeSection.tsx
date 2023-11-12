import { FunctionComponent } from "react";
import "./WelcomeSection.css";

const WelcomeSection: FunctionComponent = () => {
  return (
    <div className="line-parent">
      <img className="line-icon" alt="" src="/line-1.svg" />
      <h2 className="welcome2">WELCOME</h2>
    </div>
  );
};

export default WelcomeSection;
