import React from "react";
import Feed from "./components/Feed";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pinterest Clone</h1>
      </header>
      <Feed />
      <Analytics />
    </div>
  );
}

export default App;
