import { PokemonAPI } from "../API";
const SET_VILLAGES = 'SET_VILLAGES';

let initialState = {
    villages: []
}


const homePageReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type){
        case SET_VILLAGES: {
            stateCopy = {
                ...state,
                villages: action.village
            }
            return stateCopy;
        }
        default:
            return state
    }
}


const getVillagesActionCreator = (data) => {
    return {
        type: SET_VILLAGES,
        village: data

    }
}

export const getVillagesThunkCreator = () => {    
    return (dispatch) => {
        PokemonAPI.getVillages().then(response => {
            dispatch(getVillagesActionCreator(response.data))
        })
    }
   
}

getVillagesThunkCreator()

export default homePageReducer;