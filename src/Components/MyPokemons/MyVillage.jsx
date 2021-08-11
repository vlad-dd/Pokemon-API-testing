import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MyPokemon from './MyPokemon'

const MyVillage = (props) => {

    let pokemonsInBag = props.myPokes.map((el) => {
        return ( <MyPokemon id = {el.id} name ={el.name} url={el.url}/>)
    })

    return (
        <div className={props.className}>
            <div >
            <span>{props.name}</span>
            </div>
            <div>
            <img className='village_icons' src={props.url}/>
            </div>       
            <div className={props.pokemons}>
                {pokemonsInBag}
            </div>            
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        myPokes: state.MyPokemonsReducer.myPokes 
    }
}

export default connect(mapStateToProps, {})(MyVillage)
