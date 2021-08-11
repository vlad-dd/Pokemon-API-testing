import homePageReducer from "./homePageReducer";
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AllPokemonsReducer from './AllPokemonsReducer';
import { compose } from 'redux';
import MyPokemonsReducer from './MyPokemonsReducer';
import {reducer as formReducer} from 'redux-form';
import LoginReducer from './LoginReducer';




let reducers = combineReducers({homePageReducer: homePageReducer, AllPokemonsReducer: AllPokemonsReducer, MyPokemonsReducer:MyPokemonsReducer,
form: formReducer, LoginReducer:LoginReducer })


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;