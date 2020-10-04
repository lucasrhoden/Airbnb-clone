import React from 'react';
import { connect } from "react-redux";
import { DateRangePicker } from 'react-date-range';
import Button from "@material-ui/core/Button"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useHistory } from "react-router-dom"

import "./PickDate.css";
import PickGuests from "./PickGuests/PickGuests";

function PickDate(props) {

    const history = useHistory();

    return (
        <div className="pickDate">
            <DateRangePicker
                onChange={(range) => props.onChangeRange([range.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={props.pickDate}
                direction="horizontal"
            />
            <div className="pickDate_right">
                <PickGuests />
                <Button onClick={() => {
                    history.push("/search")
                    }}>Search
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pickDate: state.setDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeRange: (newRange) => dispatch({type: "DATECHANGE", range: newRange})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickDate)
