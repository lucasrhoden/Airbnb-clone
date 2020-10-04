import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Button from "@material-ui/core/Button"
import "./Banner.css"

import PickDate from "./PickDate/PickDate"

function Banner() {
    const [dateSearch, setdateSearch] = useState(true);
    const history = useHistory();
    return (
        <div className="banner">
            <Button
                onClick={() => setdateSearch(!dateSearch)}>{dateSearch ? "Search Date" : "Date"}
            </Button>
            {!dateSearch && <PickDate />}
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={() => history.push("/search")}>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
