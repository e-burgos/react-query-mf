import React from "react";
import ReactDOM from "react-dom";
import FetchData from "./components/FetchData";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div className="mb-4">From Remote Fetch MF <em>(remote-fetch-mf)</em></div>
    <FetchData title={"Title prop here!"} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
