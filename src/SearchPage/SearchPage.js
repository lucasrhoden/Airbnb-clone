import React from 'react';
import Button from "@material-ui/core/Button/Button";
import { connect } from "react-redux";

import "./SearchPage.css"
import SearchComponent from "./SearchComponent/SearchComponent";

function SearchPage(props) {

    let totalGuests = 0
    props.guests.forEach(el => {
        totalGuests = totalGuests + el.total
    })

    const months = ["Jan", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const startDate = new Date(props.dateRange[0].startDate);
    const startDay = startDate.getDate();
    const startMonth = startDate.getMonth();

    const endDate = new Date(props.dateRange[0].endDate);
    const endDay = endDate.getDate();
    const endMonth = endDate.getMonth();

    return (
        <div className="searchPage">
            <div className="searchPage_header">
                <p>300+ stays · {startDay} {months[startMonth]} - {endDay} {months[endMonth]} </p>
                <h3>Stays in Madrid</h3>
                <div className="searchPage_filter">
                    <Button>Type of place</Button>
                    <Button>Price</Button>
                    <Button>Instant Book</Button>
                    <Button>More filters</Button>
                </div>
            </div>
            <SearchComponent 
                img="https://s1.it.atcdn.net/wp-content/uploads/2017/11/IT_2017NOV10OnlineStory_AirBnB_1500x1001px.jpg"
                location="Entire flat in Malasaña"
                title="Spacious 1 bedroom apartment in a large patio"
                guests={`${totalGuests} guests`}
                facilities="Wifi · Air conditioning · Kitchen · Washing machine"
                price="£788"
            />
            <SearchComponent 
                img="https://s1.it.atcdn.net/wp-content/uploads/2017/11/IT_2017NOV10OnlineStory_AirBnB_1500x1001px.jpg"
                location="Entire flat in Malasaña"
                title="Spacious 1 bedroom apartment in a large patio"
                guests={`${totalGuests} guests`}
                facilities="Wifi · Air conditioning · Kitchen · Washing machine"
                price="£788"
            />
            <SearchComponent 
                img="https://s1.it.atcdn.net/wp-content/uploads/2017/11/IT_2017NOV10OnlineStory_AirBnB_1500x1001px.jpg"
                location="Entire flat in Malasaña"
                title="Spacious 1 bedroom apartment in a large patio"
                guests={`${totalGuests} guests`}
                facilities="Wifi · Air conditioning · Kitchen · Washing machine"
                price="£788"
            />
            <SearchComponent 
                img="https://s1.it.atcdn.net/wp-content/uploads/2017/11/IT_2017NOV10OnlineStory_AirBnB_1500x1001px.jpg"
                location="Entire flat in Malasaña"
                title="Spacious 1 bedroom apartment in a large patio"
                guests={`${totalGuests} guests`}
                facilities="Wifi · Air conditioning · Kitchen · Washing machine"
                price="£788"
            />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        guests: state.ageRanges,
        dateRange: state.setDate
    }
}

export default connect(mapStateToProps)(SearchPage);
