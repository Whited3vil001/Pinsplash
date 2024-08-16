import React from "react";
import Feed from "./components/Feed";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="logos">
        <h1>Pinsplash</h1>
        <div className="bicon hidden">
          <a href="#" className="button">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="#" className="button hidden">
            <FontAwesomeIcon icon={faComment} />
          </a>
          <a href="#" className="button hidden">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </div>
        <div>
          <a href="#" className="button show">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </div>
      </div>
      <Feed />
    </div>
  );
}

export default App;
