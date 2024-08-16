import React from "react";
import Feed from "./components/Feed";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComment, faUser } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="logos">
        <img className="logo" src="/favicon.png"></img>
        <h1>Pinterest</h1>
        <h2>
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faUser} />
        </h2>
      </div>
      <Feed />
    </div>
  );
}

export default App;
