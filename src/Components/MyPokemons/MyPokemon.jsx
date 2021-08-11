import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { PokemonAPI } from '../../API';
import './MyPokemons.css';



const MyPokemon = ({name, url, id}) => {
   const getData = () => {
        console.log({name, url, id})
        PokemonAPI.deleteAddedPokemons(id)
    
        
    }





    return (
        <div>
             <div className= 'my_pokemon'>
                 <div className= 'pokemon'>
                 <div><span>{name}</span></div>
                 <img src={url}/> 
                 </div>
                 <img className='delete_icon' onClick={getData} src='https://image.flaticon.com/icons/png/128/3096/3096673.png' />
                 
                </div>
        </div>
    )
}

export default connect(null, {})(MyPokemon)
