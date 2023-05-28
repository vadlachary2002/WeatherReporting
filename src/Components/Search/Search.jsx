import React, { useState } from "react";
import './Search.css';
import axios  from 'axios';
const Search = (props) => {

  const { setInfo } = props;
  const [ city, setCity ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] =  useState('');

  const updateCity = (e)=>{
    const { value } = e.target;
    setCity(value);
  }
  const onSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const res = await axios.get('http://api.weatherstack.com/current',{params: {access_key:"8655ce31b7089d0b85e43253507f9824",query: city}});
      console.log(res);
      if(!res.data.success){
        setLoading(false);
        setError("Api error");
        return ;
      }
      console.log("uhh");
      setLoading(false);
      setInfo(res.data);
      
    }catch(error){
      setLoading(false);
      setError("Api error");
      console.log(error.response);
    }
    setLoading(false);
    setTimeout(() => {
      setError('');
    }, 2000);
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
      {error && <div className="loading error">{error}</div>}
    </div>
  )

}
export default Search;