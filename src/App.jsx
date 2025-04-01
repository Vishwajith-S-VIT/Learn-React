import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App1 } from "./App1";
import { App2 } from "./App2";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Router DOM Testing</h1>
      <nav style={{ marginBottom: "20px" }}>
        <a href="/Learn-React/App1">App1</a>&emsp;|&emsp;
        <a href="/Learn-Reacts/App2">App2</a>
      </nav>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Learn-React" element={<Home />} />
        <Route path="/Learn-React/App1" element={<App1 />} />
        <Route path="/Learn-Reacts/App2" element={<App2 />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
