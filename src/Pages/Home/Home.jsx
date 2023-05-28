import React, { useState} from "react";
import { Card, Search } from "../../Components";
import './Home.css';

const defaultSearch = {
  current:{
    observation_time:"07-13 AM",
    temperature: 32,
    weather_descriptions:["sunny","pale"],
    weather_icons: '',
    is_day:"yes",
    humidity:87,
    pressure: 1101,
    wind_dir:"N",
    wind_degree: "11",
    wind_speed: 12,
  },
  location:{
    name:"New York",
    region: "Cambira",
    country:" USA"
  }
}

const Home = () => {
  const [ windInfo, setWindInfo ]  = useState(null);

  const setDefault = () => {
    setWindInfo(defaultSearch);
  }

  return (
    <div className="home">
      <div className="flex">
        <h2>Weather Report</h2>
        <button className="default-btn" onClick={setDefault}>Default</button>
      </div>
      
      <Search setInfo={setWindInfo} />
      {windInfo && <Card windInfo={windInfo} />}
    </div>

  )
}

export default Home;