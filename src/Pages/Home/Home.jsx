import React from "react";
import { Search } from "../../Components";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Weather Report</h2>
      <Search />
    </div>

  )
}

export default Home;