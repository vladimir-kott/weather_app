import React, { useState, useEffect } from "react";


const LogoAnimated = ({icon}) => {

    const dayArr = ['day', 'cloudy-day-1', 'cloudy', 'cloudy', 'rainy-6', 'rainy-1', 'thunder', 'snowy-5', 'day']
    const nightArr = ['night', 'cloudy-night-1', 'cloudy', 'cloudy', 'rainy-6', 'rainy-7', 'thunder', 'snowy-5', 'night']
    const indexs = ['01', '02', '03', '04', '09', '10', '11', '13', '50']
    let currentImg = ''

    function getIndex(arr, index){
        return arr[indexs.indexOf(index)]
    }

    useEffect(() => {
        const dayORnight = icon.data.slice(-1)
        const index = icon.data.slice(0, 2)
        dayORnight === 'd' ? currentImg =  getIndex(dayArr, index) : currentImg = getIndex(nightArr, index)
        console.log(`/animated/${currentImg}.svg`)
    }, [])


    return (
        <img src={`/animated/${currentImg}.svg`} width="50" height="50" alt="SVG animation"></img>
    )
}

export default LogoAnimated