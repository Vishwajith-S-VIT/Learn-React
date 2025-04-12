import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { App1 } from "./App1";
import { GetScreenDimensions } from "./GetScreenDimensions";

function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Links to all my projects on here</h1>
      <table cellPadding={5} cellSpacing={0} border={2} align="center">
        <thead>
          <tr>
            <th>Project Description</th>
            <th>Link to the corresponding project.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dynamically increase or reduce Font Size using useState() hook.</td>
            <td>
              <Link to="/App1"><button>App1</button></Link>
            </td>
          </tr>
          <tr>
            <td>Get the viewport dimensions and actual dimensions of your screen</td>
            <td>
              <Link to="/GetScreenDimensions"><button>GetScreenDimensions</button></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/App1" element={<App1 />} />
        <Route path="/GetScreenDimensions" element={<GetScreenDimensions />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
