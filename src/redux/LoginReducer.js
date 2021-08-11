import { PokemonAPI } from "../API";

const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState= {
    login: [], 
}

const LoginReducer = (state = initialState , action) => {
    let stateCopy;
    switch(action.type) {
        case SET_LOGIN_DATA: {
            stateCopy = {
                ...state,
                login: [action.loginInfo]
            }
            return stateCopy;
        }

        default:
            return state
                
    }
    
}

const setLoginDataActionCreator = (login, password, rememberMe) => {
    return {
        type: SET_LOGIN_DATA,
        loginInfo: login, password, rememberMe
    }
}

export const setLoginDataThunkCreator = (login, password, rememberMe) => {
    return (dispatch) => {
        PokemonAPI.setLoginData(login, password, rememberMe);
        dispatch(setLoginDataActionCreator(login, password, rememberMe))


       
    }
}

export default LoginReducer;