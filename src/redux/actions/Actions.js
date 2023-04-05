import * as actionTypes from "./actionTypes";

export function getId(product){
    return {type : actionTypes.GET_ID , payload : product}
}