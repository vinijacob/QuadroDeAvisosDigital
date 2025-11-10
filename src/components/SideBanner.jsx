import React from 'react';
import '../styles/SideBanner.css';

export default function SideBanner({ height, width, backgroundImage, borderRadius }) {
  return (
    <div
    className='sideBanner-img'
    style={{
        height: `${height}`,
        width: `${width}`,
        backgroundImage: `url(${backgroundImage})`,
        borderRadius: `${borderRadius}`
    }}
    
    >
        IMAGEM BANNER
    </div>
  )
}
