import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setPokemonThunkCreator } from '../../redux/MyPokemonsReducer'

const Pokemon = ({name, url, setPokemonThunkCreator}) => {

    const [addPokemonToPokeball, setAddPokemonToPokeball] = useState(false)

   const addPokemon = () => {
    setPokemonThunkCreator({ name, url})
    setAddPokemonToPokeball(true)
   }

    return (
        <div className='all_pokemons'>
             <div className='all_item'>
                 <h3>{name}</h3>
                 <img src={url}/> 
                 {!addPokemonToPokeball ? <img onClick={addPokemon} className='pokemon_button' src='https://image.flaticon.com/icons/png/128/744/744104.png' /> : 
                 <img onClick={addPokemon} className='pokemon_button' src='https://image.flaticon.com/icons/png/128/361/361998.png' />}
                 
                 </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        myPokes: state.MyPokemonsReducer.myPokes
    }
}
export default connect(mapStateToProps, {setPokemonThunkCreator:setPokemonThunkCreator})(Pokemon);
