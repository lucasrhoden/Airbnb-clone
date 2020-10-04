import React from 'react'
import { useHistory } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import "./Header.css";
import logo from "../assets/images/airbnb-logo_v3.png";

function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <img alt="airbnb-logo" src={logo} onClick={() => history.push("/")}/>
            <div className="header__search">
                <IconButton>
                    <SearchIcon />
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <LanguageIcon />
                    <ArrowDropDownIcon />
                </IconButton>
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4R-bhse0weJ5ighhfhXS0egIZd1js0lyqKg&usqp=CAU"/>
            </div>
        </div>
    )
}

export default Header
