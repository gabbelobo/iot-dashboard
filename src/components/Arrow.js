import React from 'react'

const Arrow = ({ width,height,value }) => {
    return (

        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1" 
            style={{
                position: 'absolute',
                width,
                height,
                left: `calc((100% - ${width*2}px)/2)`,
                top: `calc((100% - ${height}px)/2)`,
                transform: `rotate(${value*180}deg)`,
                transformOrigin: '100% 50%',
                transition: `transform 1.5s linear`
            }}>
            <g stroke="#24609B" strokeWidth="4" strokeLinecap="round" />
            <polyline
                points={`${width/3} ${height/3} ${4} ${height/2} ${width/3} ${2*height/3}`}
                stroke="#24609B"
                strokeWidth="4"
                strokeLinecap='butt' fill="none" strokeLinejoin='round'>&gt;</polyline>
            <line x1="4" y1="50%" x2="100%" y2="50%" 
            strokeLinecap="round" stroke="#24609B" strokeWidth="4"/>
        </svg>
    )
}

export default Arrow