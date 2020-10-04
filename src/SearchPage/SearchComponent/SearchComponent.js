import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';

import "./SearchComponent.css"

function SearchComponent({img, location, title, guests, facilities, price}) {
    return (
        <div className="searchComponent">
            <div className="componentImage">
                <img src={img} alt="img" />
            </div>
            <div className="componentInfo">
                <p>{location}</p>
                <h5>{title}</h5>
                <hr />
                <p><span>{guests}</span> · 1 bedroom · 1 bed · 1 bathroom</p>
                <p>{facilities}</p>
            </div>
            <div className="componentRight">
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <p><strong>{price}</strong> / month</p>
            </div>
        </div>
    )
}

export default SearchComponent
