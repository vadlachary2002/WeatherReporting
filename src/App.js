import React from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";
import { About, Home } from "./Pages";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route  path='/home' element={<Home />}/>
        <Route  path='/about' element={<About />}/>
      </Routes>
    </Router>
  )

}

export default App;