import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import Climate from "./Cloud";

const currDate= new Date().toLocaleDateString();
const currTime= new Date().toLocaleTimeString();

const App = () => {

  const [search, setSearch]= useState();
  const [tems, setTems]= useState();
  const [city, setCity]= useState();
  const [info, setInfo]= useState();

  useEffect( () =>{
    const fetchApi = async () =>{
    const Url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e6d9cb65cd46f622d1c0cd230181dca5`
    const response = await fetch(Url);
    const resjson = await response.json();
    console.log(resjson);
    setTems(resjson.main);
    
};

fetchApi();
  }, [search] )
  
  const inputCity = (event) =>{
    const cities= event.target.value;
    setSearch(cities)

  }

  const subs = () =>{
    setCity(search);
    setInfo(tems);
  }
  return (
    <div className="main">
      <div className="mainbox">
        <div className="first_half">
          <div className="input_search">
            <input type="text" className="input" onChange={inputCity} />
            <SearchIcon className="search" onClick={subs} style={{ height:"100%", borderTopRightRadius:"20px",
            borderBottomRightRadius:"20px",
            borderBottomRightRadius:"20px",boxShadow: "5px 0px 10px 5px rgba(0, 0, 0, 0.4)" }} />
</div>
            
            </div>
    
    {!info ? (
    <p className="no_data">No Such City !!!</p>
           ) : (
            <div className="second_half">
            <div className="whether">
                <Climate />
              </div>
              <div className="city">
                <h1 style={{ textTransform: "capitalize" }} > {city} </h1>
              </div>
              <div className="time">
                <p> {currDate} || {currTime} </p>
              </div>
    
              <div className="tem">
                <h1> {info.temp}° cel </h1>
              </div>
    
              <div className="max_min_temp">
                <p>min:{info.temp_min} cel || max:{info.temp_max} cel</p>
              </div>
            </div>
           )}
            
          </div>
          </div>
);
}

export default App;
  
  