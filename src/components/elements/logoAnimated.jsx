import React, { useState, useEffect } from "react";
import setNameSVG from "../../utils/imageChanger";

const LogoAnimated = ({icon}) => {
    const [currentImg, setCurrentImg] = useState()

    useEffect(() => {
        setCurrentImg(setNameSVG(icon.data))
    }, [])

    return (<img src={`animated/${currentImg}.svg`} width="50" height="50" alt="SVG animation"/>)
    
}

export default LogoAnimated