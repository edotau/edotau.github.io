import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import routes from './routes'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar routes={routes} />
        <div className="page-content">
          <Routes>
            {routes.map((route, index,) => (
              <Route key={index} path={route.path} element={route.element} />
            ),)}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App