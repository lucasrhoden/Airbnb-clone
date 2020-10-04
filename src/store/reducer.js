import { addDays } from 'date-fns';

const initialState = {
    ageRanges: [
        {
            range: "Adults",
            info: "Ages 13 or above",
            total: 2
        },
        {
            range: "Children",
            info: "Ages 2-12",
            total: 2
        },
        {
            range: "Infants",
            info: "Under 2",
            total: 0
        }
    ],
    setDate: [{
        startDate: new Date(),
        endDate: addDays(new Date(), 5),
        key: 'selection'
    }]
}

const reducer = (state = initialState, action) => {
    let newObj = null;
    switch (action.type) {
        case "INCREMENT":
            newObj = {
                ...state.ageRanges[action.index],
                total: state.ageRanges[action.index].total + 1
            }
            const newArray = [...state.ageRanges]
            newArray.splice(action.index, 1, newObj)
            return {
                ...state,
                ageRanges: newArray
            }
        case "DECREMENT":
            newObj = {
                ...state.ageRanges[action.index],
                total: state.ageRanges[action.index].total - 1
            }
            state.ageRanges.splice(action.index, 1, newObj)
            return {
                ...state,
                ageRanges: [
                    ...state.ageRanges
                ]
            }
        case "DATECHANGE":
            return {
                ...state,
                setDate: action.range
            }
        default: return state;
    }    
}

export default reducer;