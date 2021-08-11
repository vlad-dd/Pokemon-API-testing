import React from 'react'
import { connect } from 'react-redux'
import Type from './Type'

const TypeInfo = (props) => {

    let setType = props.about.map((el) => {
        switch(el.name) {
            case 'Grass type':
                return (<Type header = 'pokemons_grass'  theme='grass' img= {el.img} name = {el.name} gif = {el.gif} description = {el.description}  leaders = {el.leaders}/>);

            case 'Fire type':
                return (<Type header = 'pokemons_fire' theme='fire' img= {el.img} name = {el.name} gif = {el.gif}  description = {el.description}  leaders = {el.leaders}/>);

            case 'Electric type':
                debugger
                return (<Type header = 'pokemons_electric'  theme='electric' img= {el.img} name = {el.name} gif = {el.gif}  description = {el.description}  leaders = {el.leaders}/>);

            case 'Water type':
                return (<Type header = 'pokemons_water'  theme='water' img= {el.img} name = {el.name} gif = {el.gif}  description = {el.description}  leaders = {el.leaders}/>);

            case 'Ground type':
                return (<Type header = 'pokemons_ground'  theme='ground' img= {el.img} name = {el.name} gif = {el.gif}  description = {el.description} leaders = {el.leaders}/>);

            case 'Rock type':
                return (<Type header = 'pokemons_rock'  theme='rock' img= {el.img} name = {el.name} gif = {el.gif}  description = {el.description}  leaders = {el.leaders}/>);
            default:
                return(<Type name = {el.name} img= {el.img} description = {el.description} gif = {el.gif} leaders = {el.leaders} />)
        }
    })

    
    return (
        <div>
            <div>{setType}</div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        about: state.MyPokemonsReducer.about
    }
}

export default connect(mapStateToProps, {})(TypeInfo);
