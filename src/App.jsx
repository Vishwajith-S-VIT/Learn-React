import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { App1 } from "./App1";
import { App2 } from "./App2";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Router DOM Testing</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/App1">App1</Link>&emsp;|&emsp;
        <Link to="/App2">App2</Link>
      </nav>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/App1" element={<App1 />} />
        <Route path="/App2" element={<App2 />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
