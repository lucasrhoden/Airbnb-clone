import React from 'react'

import "./Card.css"

function Card({
    src, 
    title, 
    description, 
    price, 
    width, 
    height, 
    bcColor, 
    brBottomRight, 
    brBottomLeft}) 
    {
    return (
        <div className="card" style={{width:width}}>
            <img alt={`${title}-img`} src={src} style={{height: height}} />
            <div 
                className="card_info" 
                style={{backgroundColor:bcColor, 
                    borderBottomRightRadius:brBottomRight, 
                    borderBottomLeftRadius:brBottomLeft}
                }>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
