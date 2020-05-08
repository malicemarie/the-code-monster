import React from 'react';
import './style.css';

const Figure = ({caption, imageSrc, theme}) => (
    
  <div>
<figure className={`${theme} figure`}>
    <img className="figureImage" alt="placeholder" src={imageSrc} />
    <span className="figureLabel" >{caption}</span>
</figure>
</div>

);

export default Figure;