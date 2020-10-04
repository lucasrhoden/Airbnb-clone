import React from 'react'
import Button from "@material-ui/core/Button"
import Card from "../Card/Card";

import "./Main.css"

function Main() {
    return (
        <div className="main">
            <div className="main_top">
                <div className="main_top_header">
                    <h1>Broadway Online Experiences</h1>
                    <p>Join live, interactive performances and conversations with 
                        people from Broadway and beyond. Without leaving home.
                    </p>
                </div>
                <div className="main_top_header_right">
                    <Button>Explore all</Button>
                </div>
            </div>
            <div className="main_bottom">
                <div className="main_bottom_left">
                    <Card
                        src="https://a0.muscache.com/im/pictures/38aeacb5-7e77-4bf6-a813-754605020922.jpg?im_w=480"
                        title="Day in the life of a Las Vegas dancer"
                        height="405px"
                        width="550px"
                        bcColor="rgb(34,34,34)"
                        brBottomLeft="10px"
                        brBottomRight="10px"
                    />
                </div>
                <div className="main_bottom_right">
                    <div className="main_bottom_right_top">
                    <Card
                        src="https://a0.muscache.com/im/pictures/e77da774-9e72-46d6-a7fd-7d159f823046.jpg?im_w=320"
                        title="Share an evening of music and healing"
                        height="180px"
                        width="250px"
                        bcColor="rgb(34,34,34)"
                        brBottomLeft="10px"
                        brBottomRight="10px"
                    />
                    <Card
                        src="https://a0.muscache.com/im/pictures/7f607dbc-c51c-482e-8b67-55ded3e7f864.jpg?im_w=320"
                        title="Night of magic and mind-reading"
                        height="180px"
                        width="250px"
                        bcColor="rgb(34,34,34)"
                        brBottomLeft="10px"
                        brBottomRight="10px"
                    />
                    </div>
                    <div className="main_bottom_right_bottom">
                    <Card
                        src="https://a0.muscache.com/im/pictures/d88db0e7-ef5b-49c6-ae07-af3525ac252f.jpg?im_w=480"
                        title="Take part in a live musical"
                        height="103px"
                        width="535px"
                        bcColor="rgb(34,34,34)"
                        brBottomLeft="10px"
                        brBottomRight="10px"
                    />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
