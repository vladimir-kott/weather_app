import React, { useState, useEffect } from "react"
import configFile from "./config.json";
import NavMenu from "./components/navMenu";
import Main from "./components/main";
import Preloader from "./components/elements/preloader";

function App() {
  const [city, setCity] = useState('Київ')
  const [data, setData] = useState()
  const [error, setError] = useState({})

  const serverApi = configFile.apiEndpoint + `units=metric&q=${city}&lang=ru&appid=${process.env.REACT_APP_WEATHER_KEY}`

  async function getData() {

    const response = await fetch(serverApi, {
      method: 'GET'
    })
    
    let result = await response.json()

    if (response.ok){
      setData(result)
    }
    else {
      console.log('error: ', result.message)
     }
  }

  useEffect(() => {
    getData() 
  }, [])

  return (
    <div className="App">
      {data ? (<>
        <NavMenu data={data.weather[0].icon}/>
        <Main city={city} setCity={setCity} data={data} getData={getData}/>
      </>) : (<Preloader />)
      }
    </div>
  );
}

export default App;
