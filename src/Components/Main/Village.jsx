import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setVillageThunkCreator } from '../../redux/MyPokemonsReducer'
import { setCountThunkCreator } from '../../redux/MyPokemonsReducer'
import { setAboutThunkCreator } from '../../redux/MyPokemonsReducer'

const Village = ({name, url, setVillageThunkCreator, myPokes, setCountThunkCreator, allCount, id, setAboutThunkCreator}) => {

    const selectVillage = () => {
        window.alert(`You choose a ${name}`)
        setVillageThunkCreator({name, url})
    } 

    const aboutType = () => {
        setAboutThunkCreator(id)
    }

    setCountThunkCreator(myPokes.length)

  

    return (
        <div>
          <div className='village '>
                <div className='village_items'>
                <div>{name}</div>
                <div> 
                <NavLink to='info'><img onClick={aboutType} className='village_icons' src={url}/></NavLink>
                    <div> You will have: {allCount} pokemons  </div>
                </div>
                <button className='select_button' onClick={selectVillage}>Select this type</button>
                </div>
                
            </div>
          
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        myVillage: state.MyPokemonsReducer.myVillage,
        myPokes: state.MyPokemonsReducer.myPokes
    }
}

export default connect(mapStateToProps, {setVillageThunkCreator:setVillageThunkCreator,
    setCountThunkCreator:setCountThunkCreator, setAboutThunkCreator:setAboutThunkCreator})(Village)