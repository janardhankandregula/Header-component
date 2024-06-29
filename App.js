import React from "react";
import ReactDOM from "react-dom";

const HeaderComponent = () => {
  return <div>Rendered</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
