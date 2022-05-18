import React, { useState, useEffect } from "react"
import configFile from "./config.json";

function App() {

  const [city, setCity] = useState('Київ')
  const [data, setData] = useState()
  const [error, setError] = useState()
  const serverApi = configFile.apiEndpoint + `units=metric&q=${city}&lang=ru&appid=${process.env.REACT_APP_WEATHER_KEY}`

  console.log('serverApi', serverApi)

  async function getData() {

    const response = await fetch(serverApi, {
      method: 'GET'
    })
    
    let result = await response.json()

    if (response.ok){
      setData(result)
    }
    else {
      //console.log('error: ', result.message)
     }
  }

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    //console.log('mess: ', city)
    getData()
  }

  useEffect(() => {
    getData()
    //console.log('data', data) 
  }, [])

  return (
    <div className="App">
      <main className="container mx-auto">
        <div className="">
          {/*<!-- Replace with your content -->*/}
              {data ? (<>
                <input
                  type='text'
                  id='city'
                  name='city'
                  onChange={handleChange}
                  value={city}
                  placeholder="Enter your city..."
                  className="rounded-md border-2 border-indigo-200 border-b-indigo-500"
                ></input>
                <button
                  onClick={handleClick}
                  className="rounded-md border-double border-4 border-sky-500"
                >
                  Поиск
                </button>
                <div className="rounded-md border-2 border-sky-200">
                  <p>Погода в населенном пункте: {data.name}</p>
                  <p>Температура воздуха: {Math.round(data.main.temp)}С°</p>
                  <p>Ощущается как: {Math.round(data.main.feels_like)}С°</p>
                  <p>Погода: {data.weather[0].main} ({data.weather[0].description})</p>
                  <p>Иконка: {data.weather[0].icon}</p>
                  <p>Минимальная температура сегодня: {Math.round(data.main.temp_min)}С°</p>
                  <p>Максимальная температура сегодня: {Math.round(data.main.temp_max)}С°</p>
                  <div>
                    <p>Направление ветра: {data.wind.deg}°</p>
                    <p>Порыв ветра: ~{Math.round(data.wind.gust)} мс/с</p>
                    <p>Скорость ветра: ~{data.wind.speed.toFixed(1)} мс/с</p>
                  </div>
                </div>
                </>):("Loading...")}
          {/*<!-- /End replace -->*/}
        </div>
      </main>
    </div>
  );
}

export default App;
