import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="mb-2">From Host</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
