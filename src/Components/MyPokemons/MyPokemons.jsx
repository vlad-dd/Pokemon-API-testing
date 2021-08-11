import React, { useEffect } from 'react'
import './MyPokemons.css'
import { connect } from 'react-redux';
import MyVillage from './MyVillage'
import MyPokemon from './MyPokemon';
import { setAddedPokemons } from '../../redux/MyPokemonsReducer';

const MyPokemons = (props) => {

    useEffect(() =>{
        props.setAddedPokemons()
    }, [])

    let village = props.myVillage.map((el) => {
        switch(el.name) {
            case 'Grass type':
                return (<MyVillage pokemons = 'pokemons_info_grass' className='grass_theme' name = {el.name} url = {el.url}/>);

            case 'Fire type':
                return (<MyVillage pokemons = 'pokemons_info_fire' className='fire_theme' name = {el.name} url = {el.url}/>);

            case 'Electric type':
                return (<MyVillage pokemons = 'pokemons_info_electric' className='electric_theme' name = {el.name} url = {el.url}/>);

            case 'Water type':
                return (<MyVillage pokemons = 'pokemons_info_water' className='water_theme' name = {el.name} url = {el.url}/>);

            case 'Ground type':
                return (<MyVillage pokemons = 'pokemons_info_ground' className='ground_theme' name = {el.name} url = {el.url}/>);

            case 'Rock type':
                return (<MyVillage pokemons = 'pokemons_info_rock' className='rock_theme' name = {el.name} url = {el.url}/>);
                   


            default:
                return (<MyVillage className='village_icons' name = {el.name} url = {el.url}/>)
        }
        
    })

    // let pokemonsInBag = props.myPokes.map((el) => {
    //     return ( <MyPokemon name ={el.name} url={el.url}/>)
    // })
    return (
        <div>
            <div className='wrapper_title'>
                <h2>Your type</h2>
            </div>
            <div className='village_info'>
                {village}       
            </div>
            {/* <div className='pokemons_info'>
            {pokemonsInBag}
            </div>    */}
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        myVillage: state.MyPokemonsReducer.myVillage,
        myPokes:  state.MyPokemonsReducer.myPokes 
    }
}

export default connect(mapStateToProps, {setAddedPokemons:setAddedPokemons})(MyPokemons);
