import { PokemonAPI } from "../API";
const SET_POKEMONS_DATA = 'SET_POKEMONS_DATA';
const SET_ALL_DATA = 'SET_ALL_DATA';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const SET_PREVIOUS_PAGE = 'SET_PREVIOUS_PAGE';

let initialState = {
    pokemons: [],
    allData: [],
    nextPage: null,
    previousPage: null
}

const AllPokemonsReducer = (state = initialState, action) => {
    let stateCopy;
    switch(action.type) {
        case SET_POKEMONS_DATA: {
            stateCopy = {
                ...state,
                pokemons: action.newPokemons
            }
            return stateCopy;
        }

        case SET_ALL_DATA: 
            stateCopy = {
                ...state,
                allData: [...state.allData, action.allPokemonsData]
            }
            return stateCopy;
        

        case SET_NEXT_PAGE: {
            stateCopy = {
                ...state,
                nextPage: action.page   
            }
            return stateCopy;
        }

        case SET_PREVIOUS_PAGE: {
            stateCopy = {
                ...state,
                previousPage: action.prevPage
            }
            return stateCopy;
        }

        default:
            return state
    }
}


const setPokemonsActionCreator = (data) => {
    return {
        type: SET_POKEMONS_DATA,
        newPokemons: data
    }
}

export const setNextPageActionCreator = (next) => {
    return {
        type: SET_NEXT_PAGE,
        page: next
    }
}

export const setPrevPageActionCreator = (previous) => {
    return {
        type: SET_PREVIOUS_PAGE,
        prevPage: previous
    }
    
}

const setAllPokemonsDataActionCreator = (allNewData) => {
    return {
        type: SET_ALL_DATA,
        allPokemonsData: allNewData
    }
}

export const setPokemonsThunkCreator = (currentPageUrl) => {
   return (dispatch) => {
       PokemonAPI.getPokemons(currentPageUrl).then((response) => {
           dispatch(setPokemonsActionCreator(response.data.results))
           dispatch(setNextPageActionCreator(response.data.next))
           dispatch(setPrevPageActionCreator(response.data.previous))
    })
    }
}

export const setAllPokemonsDataThunkCreator = (name) => {
    return (dispatch) => {
        PokemonAPI.getAllPokemonInfo(name).then((response) => {
            dispatch(setAllPokemonsDataActionCreator(response.data))
        })
    }
}

export default AllPokemonsReducer