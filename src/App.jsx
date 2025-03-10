import {HashRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from "./HomePage.jsx";
import ResultsPage from "./ResultsPage.jsx";
import LoginPage from "./LoginPage.jsx";
import RegisterPage from "./RegisterPage.jsx";
import GHConfirmation from "./GHConfirmation.jsx";

function App() {
  const [count, setCount] = useState(0)

    //console.log(process.env.GENERIC);

  return (
  <Router>
      <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/Results" element = {<ResultsPage />} />
          <Route path="/Login" element = {<LoginPage />} />
          <Route path="/Register" element = {<RegisterPage />} />
          <Route path="/GHConfirmation" element = {<GHConfirmation />} />
      </Routes>
  </Router>
  )
}

export default App
