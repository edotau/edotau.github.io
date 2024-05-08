import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import routes from "./routes";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Sidebar routes={routes} />
        
          <div className="grid">
            <div className="col-12">
              <div className="card">
                <div className="main-content">
                <Routes>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
