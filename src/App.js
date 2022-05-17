import React, { useState, useEffect } from "react"

function App() {

  const [data, setData] = useState({})
  const serverApi = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=3ab1bc3bedbda414055089f8e7b94579"

  async function getData() {
    const response = await fetch(serverApi, {
      method: 'GET'
    })

    let result = await response.json()

    if (response.ok){
      console.log('data is loaded ', result)
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

    </div>
  );
}

export default App;
