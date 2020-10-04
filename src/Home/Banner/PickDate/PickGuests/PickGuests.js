import React from 'react';
import { connect } from "react-redux";
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

import "./PickGuests.css";

function PickGuests(props) {
    return (
        <div className="pickGuests">
            {props.ageRanges.map((range, index) => 
                <div className="pickGuests_info" key={range.range}>
                    <div className="ageRange">
                        <h3>{range.range}</h3>
                        <p>{range.info}</p>
                    </div>
                    <div className="totalAgeRange">
                        <IconButton 
                            disabled={props.ageRanges[index].total <= 0 ? true : false} 
                            onClick={() => props.onDecrement(index)}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <p>{range.total}</p>
                        <IconButton 
                            onClick={() => props.onIncrement(index)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ageRanges: state.ageRanges
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: (i) => dispatch({type: "INCREMENT", index: i}),
        onDecrement: (i) => dispatch({type: "DECREMENT", index: i})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickGuests);
