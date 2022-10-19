import React from 'react'
import {Routes,Route, HashRouter} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
function App() {
  return (
  <div>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    </HashRouter>
    </div>
  )
}

export default App