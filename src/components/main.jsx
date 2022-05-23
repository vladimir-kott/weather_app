import React from "react";
import configFile from "../config.json";

const Main = ({city, setCity, data, getData}) => {

  //console.log(props)

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault() 
    getData()
  }

  return (
      <main className="container mx-auto flex justify-center">
        <div className="">
          {/*<!-- Replace with your content -->*/}
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
                
               <div className="flex font-sans bg-[#fefce8] shadow-md rounded-md border-1">
                  <div className="flex-none w-24 relative">
                    <img src={`${configFile.apiImg + `${data.weather[0].icon}@2x.png`}`} className="absolute object-cover pt-8"></img>
                  </div>
                  <div className="flex-auto p-6">
                    <div className="flex flex-wrap">
                      <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        Погода в населенном пункте: {data.name}
                      </h1>
                      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        <p>Погода: {data.weather[0].main} ({data.weather[0].description})</p>
                        <p>Температура воздуха: {Math.round(data.main.temp)}С°</p>
                      </div>
                    </div>
                    <div className="flex items-baseline mt-4 mb-6 pb-4 border-b border-slate-200">
                      <div className="space-x-2 flex text-sm">
                        <p className="px-4 font-semibold rounded-md bg-[#06b6d4] text-white">
                          Минимальная температура сегодня: {Math.round(data.main.temp_min)}С°
                        </p>
                        <p className="px-4 font-semibold rounded-md bg-[#f43f5e] text-white">
                          Максимальная температура сегодня: {Math.round(data.main.temp_max)}С°
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4 mb-6 text-sm font-medium pb-4 border-b border-slate-200">
                      <div className="flex-auto flex space-x-4">
                        <p>
                          Ощущается как: {Math.round(data.main.feels_like)}С°
                        </p>
                      </div>
                      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-sm text-slate-700">
                      Направление ветра: {data.wind.deg}°
                    </p>
                    <p className="text-sm text-slate-700">
                      Порыв ветра: ~{Math.round(data.wind.gust)} мс/с
                    </p>
                    <p className="text-sm text-slate-700">
                      Скорость ветра: ~{data.wind.speed.toFixed(1)} мс/с
                    </p>
                  </div>
              </div>
          {/*<!-- /End replace -->*/}
        </div>
      </main>
  );
}

export default Main
