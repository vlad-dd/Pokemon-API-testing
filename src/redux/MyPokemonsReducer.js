import { PokemonAPI } from "../API";

const SET_VILLAGE = 'SET_VILLAGE';
const SET_POKEMONS = 'SET_POKEMONS';
const SET_ALL_COUNT = 'SET_ALL_COUNT';
const ABOUT_TYPE = 'ABOUT_TYPE';


let initalState = {
    myVillage: [],
    myPokes: [],
    allCount: null,
    about: []
}

const MyPokemonsReducer = (state = initalState, action) => {
    let stateCopy;
    switch(action.type) {
        case SET_VILLAGE: {
            stateCopy = {
                ...state,
                myVillage: [action.addedVillages]
            }
            return stateCopy;
        }

        case SET_POKEMONS: {
            stateCopy = {
                ...state,
                myPokes: action.addedPokemons
            }
            return stateCopy;
        }

        case SET_ALL_COUNT: {
            stateCopy = {
                ...state,
                allCount: action.countData
            }
            return stateCopy;
        }

        case ABOUT_TYPE: {
            stateCopy = {
                ...state,
                about: [action.aboutData]
            }
            return stateCopy;
        }



        default:
            return state;    
    }
}


const setAboutActionCreator = (data) => {
    return {
        type: ABOUT_TYPE,
        aboutData: data
    }
}

export const setAboutThunkCreator = (id) => {
    return (dispatch) => {
        PokemonAPI.getAboutInfo(id).then((response) => {
            dispatch(setAboutActionCreator(response.data))
        })
    }
}


const setVillageActionCreator = (data) => {
    return {
        type: SET_VILLAGE,
        addedVillages: data
    }
}

export const setVillageThunkCreator = (newData) => {
    return (dispatch) => {
        dispatch(setVillageActionCreator(newData))
    }
}

const setPokemonActionCreator = (pokemon) => {
    return {
        type: SET_POKEMONS,
        addedPokemons: pokemon
    }
}

export const setPokemonThunkCreator = (data) => {
    return (dispatch) => {
        PokemonAPI.setMyPokemons(data);
    }
}

export const setAddedPokemons = () => {
    return (dispatch) => {
        PokemonAPI.getAddedPokemons().then((response) => {
            debugger
            dispatch(setPokemonActionCreator(response.data))
        })
    }
}

const setCountActionCreator = (countData) => {
    return {
        type: SET_ALL_COUNT,
        countData: countData
    }
}

export const setCountThunkCreator = (data) => {
    return (dispatch) => {
        dispatch(setCountActionCreator(data))

    }
}

export default MyPokemonsReducer;