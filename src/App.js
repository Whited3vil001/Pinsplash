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
          <a href="#" className="button">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="#" className="button">
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#" className="button">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </h2>
      </div>
      <Feed />
    </div>
  );
}

export default App;
