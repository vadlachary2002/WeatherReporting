import React, { useState } from "react";
import './Search.css';
import axios  from 'axios';

const Search = () => {

  const [ city, setCity ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const updateCity = (e)=>{
    const { value } = e.target;
    if(value.trim()===""){
      return ;
    }
    setCity(value);
  }
  const onSubmit = async (e)=>{
    e.preventDefault();
    try{
      const options = {
        method:'GET',
        url: 'https://us-weather-by-city.p.rapidapi.com/getweather',
        params:{
          city:'San Francisco',
          state: 'CA'
        },
        headers:{
          'X-RapidAPI-Key':'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host':'us-weather-by-city.p.rapidapi.com'
        }
      }
      const res = await axios.request(options);
      console.log(res);
    }catch(error){
      console.log(error.response);
    }
  }
  return (
    <div className="search">
      <form onSubmit={onSubmit}>
          <div className="searchBar">
            <input id="search" type="search" className="searchInput" onChange={updateCity} value={city} placeholder="Enter City"  />
            <input type="submit"  value="Search"/>
          </div>
          
      </form>
      {loading && <div className="loading">Loading...</div>}
    </div>
  )

}
export default Search;