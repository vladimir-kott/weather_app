const dayArr = ['day', 'cloudy-day-1', 'cloudy', 'cloudy', 'rainy-6', 'rainy-1', 'thunder', 'snowy-5', 'day']
const nightArr = ['night', 'cloudy-night-1', 'cloudy', 'cloudy', 'rainy-6', 'rainy-7', 'thunder', 'snowy-5', 'night']
const indexs = ['01', '02', '03', '04', '09', '10', '11', '13', '50']

function getIndex(arr, index){
    return arr[indexs.indexOf(index)]
}

export default function setNameSVG(code){
    let anserStr = ''
    const dayORnight = code.slice(-1)
    const index = code.slice(0, 2)
    dayORnight === 'd' ? anserStr = getIndex(dayArr, index) : anserStr = getIndex(nightArr, index)
    return anserStr
}

