import React, { useState, useEffect } from "react"

function App() {

  const [city, setCity] = useState('Kyiv')
  const [data, setData] = useState()
  const [error, setError] = useState()
  const serverApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=3ab1bc3bedbda414055089f8e7b94579`

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

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    console.log('mess: ', city)
    getData()
  }

  useEffect(() => {
    getData()
    console.log('data', data) 
  }, [])

  return (
    <div className="App">
      {data ? (<>
        <input
          type='text'
          id='city'
          name='city'
          onChange={handleChange}
          value={city}
        ></input>
        <button
          onClick={handleClick}
        >
          Поиск
        </button>
        <p>Погода в: {data.name}</p>
        <p>Температура воздуха: {Math.round(data.main.temp)}</p>
        <p>Ощущается как: {Math.round(data.main.feels_like)}</p>
        <p>Погода: {data.weather[0].main} ({data.weather[0].description})</p>
        <p>Иконка: {data.weather[0].icon}</p>
        <p>Минимальная температура сегодня: {data.main.temp_min}</p>
        <p>Максимальная температура сегодня: {data.main.temp_max}</p>
        <div>
          <p>Направление ветра: {data.wind.deg}</p>
          <p>Порыв ветра: {data.wind.gust}</p>
          <p>Скорость ветра: {data.wind.speed}</p>
        </div>
        </>):("Loading...")}
    </div>
  );
}

export default App;
