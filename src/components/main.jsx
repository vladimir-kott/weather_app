import React, { useState, useEffect } from "react";
import configFile from "../config.json";

const Main = () => {
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
      <main className="container mx-auto flex justify-center">
        <div className="">
          {/*<!-- Replace with your content -->*/}
              {data ? (<>
                <div className="mx-auto py-5 rounded-md my-10 flex justify-center">
                  <input
                    type='text'
                    id='city'
                    name='city'
                    onChange={handleChange}
                    value={city}
                    placeholder="Enter your city..."
                    className="rounded-md border-2 border-indigo-200 border-b-indigo-500 p-1 mr-2"
                  ></input>
                  <button
                    onClick={handleClick}
                    className="rounded-md border-2 border-sky-500 p-1"
                  >
                    Поиск
                  </button>
                </div>
                
                <div class="flex font-sans bg-[#fefce8] shadow-md rounded-md border-1">
                  <div class="flex-none w-24 relative">
                    <img src={`${configFile.apiImg + `${data.weather[0].icon}@2x.png`}`} className="absolute object-cover pt-8"></img>
                  </div>
                  <div class="flex-auto p-6">
                    <div class="flex flex-wrap">
                      <h1 class="flex-auto text-lg font-semibold text-slate-900">
                        Погода в населенном пункте: {data.name}
                      </h1>
                      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        <p>Погода: {data.weather[0].main} ({data.weather[0].description})</p>
                        <p>Температура воздуха: {Math.round(data.main.temp)}С°</p>
                      </div>
                    </div>
                    <div class="flex items-baseline mt-4 mb-6 pb-4 border-b border-slate-200">
                      <div class="space-x-2 flex text-sm">
                        <p className="px-4 font-semibold rounded-md bg-[#06b6d4] text-white">
                          Минимальная температура сегодня: {Math.round(data.main.temp_min)}С°
                        </p>
                        <p className="px-4 font-semibold rounded-md bg-[#f43f5e] text-white">
                          Максимальная температура сегодня: {Math.round(data.main.temp_max)}С°
                        </p>
                      </div>
                    </div>
                    <div class="flex space-x-4 mb-6 text-sm font-medium pb-4 border-b border-slate-200">
                      <div class="flex-auto flex space-x-4">
                        <p>
                          Ощущается как: {Math.round(data.main.feels_like)}С°
                        </p>
                      </div>
                      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                      </button>
                    </div>
                    <p class="text-sm text-slate-700">
                      Направление ветра: {data.wind.deg}°
                    </p>
                    <p class="text-sm text-slate-700">
                      Порыв ветра: ~{Math.round(data.wind.gust)} мс/с
                    </p>
                    <p class="text-sm text-slate-700">
                      Скорость ветра: ~{data.wind.speed.toFixed(1)} мс/с
                    </p>
                  </div>
                </div>
                </>):(
                    <div className="flex h-screen">
                      <div class="m-auto">
                        <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                      </div>
                    </div>
                  )}
          {/*<!-- /End replace -->*/}
        </div>
      </main>
  );
}

export default Main
