import { FunctionComponent } from "react";
import "./Group.css";

const Group: FunctionComponent = () => {
  return (
    <div className="path-1-parent">
      <input className="path-1" type="text" />
      <h1 className="search">Search...</h1>
    </div>
  );
};

export default Group;
