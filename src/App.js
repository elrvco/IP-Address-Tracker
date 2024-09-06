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
            ipAdress = 'Loading...'
            location = 'Loading...'
            timezone = 'Loading...'
            isp = 'Loading...'
          />
        </div>
      )
    } else if (ipData.status === "success"){
      return(
       <div className='content'> 
         <IpInfoContainer
          ipAdress = {ipData.query}
          location = {ipData.city + ipData.regionName + ipData.zip}
          timezone = {ipData.timezone}
          isp = {ipData.isp}
        />
        <Map
          latitude = {ipData.lat}
          longitude = {ipData.lon}
        />
       
      </div>
      )
    }else{
      return (
      <div className='content'> 
        <IpInfoContainer
          ipAdress = 'No info available'
          location = 'No info available'
          timezone = 'No info available'
          isp = 'No info available'
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
    fetch(`http://ip-api.com/json/${userInput}`)
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
            <h1>IP Adress Tracker</h1>
            <form onSubmit={submitHandler}>
                <input 
                  id='ip'
                  placeholder='Search for any Ip adress or domain'
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
