import React from 'react';
import './App.css';
import './components/IpInfoContainer.css';
import Map from './components/Map';
import IpInfoContainer from './components/IpInfoContainer';
import { useState, useEffect,useRef } from 'react';

function App() {
  const [ipData, setIpData]=useState(null);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null); 
  const renderContent= ()=>{
    if(loading) {
      return (
        <div className='content'> 
          <IpInfoContainer
            ipAddress = 'Loading...'
            location = 'Loading...'
            timezone = 'Loading...'
            language = 'Loading...'
          />
        </div>
      )
    } else if (ipData.latitude !== undefined){
      return(
       <div className='content'> 
         <IpInfoContainer
          ipAddress = {ipData.ip}
          location = { ipData.country_code +" " +  ipData.region + " " + ipData.postal}
          timezone = {ipData.timezone + " "+ ipData.utc_offset}
          language = {ipData.languages}
        />
        <Map
          latitude = {ipData.latitude}
          longitude = {ipData.longitude}
        />
       
      </div>
      )
    }else{
      return (
      <div className='content'> 
        <IpInfoContainer
          ipAddress = 'No info available'
          location = 'No info available'
          timezone = 'No info available'
          language = 'No info available'
        />
      </div>)
    }
  }
        
  const submitHandler = (e) =>{
    e.preventDefault();
    setLoading(true);
    if (inputRef.current.value !== userInput){
      setUserInput(inputRef.current.value);
    }else{
      setLoading(false)
    }
  }
  

  useEffect(()=>{
    fetch(`https://ipapi.co/${userInput}/json/`)
    .then(response => response.json())
    .then((ipData) => {
      setIpData(ipData);
      setLoading(false);
    }
    )
  },[userInput]);

    return(
        <div className ="main"> {/* para componente map, pasar idData como prop */}
          <div className= 'form'>
            <h1>IP Address Tracker</h1>
            <form onSubmit={submitHandler}>
                <input 
                  id='ip'
                  placeholder='Search for any Ip address or domain'
                  ref={inputRef} 
                  type="text" 
                /> 
                <button type='submit'>{">"}</button>
            </form>
          </div>

          {renderContent()}

        

          
        </div>
    );
}

export default App;
