import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function getId(state = initialState.clickedItem, action) {
    switch (action.type) {
        case actionTypes.GET_ID:
            return action.payload
            
           
    
        default:
            break;
    }
}