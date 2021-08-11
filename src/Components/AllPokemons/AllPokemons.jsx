import React, { useEffect, useState } from 'react'
import './AllPokemons.css';
import Pokemon from './Pokemon';
import { connect } from 'react-redux';
import { setPokemonsThunkCreator } from '../../redux/AllPokemonsReducer';
import { setAllPokemonsDataThunkCreator } from '../../redux/AllPokemonsReducer';
import { setNextPageActionCreator } from '../../redux/AllPokemonsReducer';
import { setPrevPageActionCreator } from '../../redux/AllPokemonsReducer';




const AllPokemons = (props) => {


    const [search, setSearch] = useState('')

    const [loader, setLoader] = useState(false)

    const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?offset=5&limit=5`)


    const setData = () => {
        props.setPokemonsThunkCreator(currentPageUrl)
    }

    const setAllPokemonData = () => { 
        props.pokemons.map((el) => {
        props.setAllPokemonsDataThunkCreator(el.name);
    })}

    useEffect(() => {
        setData();
        setAllPokemonData();
    }, [currentPageUrl])

    const getInputData = (el) => {
        setSearch(el.currentTarget.value)
        console.log(el.currentTarget.value)
    }

    const setNextPage = () => {
        setCurrentPageUrl(props.nextPage)
    }

    const setPreviousPage = () => {
        setCurrentPageUrl(props.previousPage)
    }
   
    return (
        <div>
            <div className='wrapper_title'>
                <h1>All Pokemons</h1>
            </div>
           <div className='all_input_block'>
               <div><span className='all_search_by_name'>Search by name:</span></div>
               <input className='all_input' onChange={getInputData} value={search}/></div>
           
           <div className='all_pokemons'>
           {props.allData.filter(item=> item.name.includes(search)).map((el) => {
               return (<Pokemon name = {el.name} url={el.sprites.front_default}/>)
               })}
           </div>
          
            <div className='navigation_block'><button  className='navigation' onClick={setNextPage}>Get Pokemons</button>
            <button  className='navigation' onClick={setPreviousPage}>Previous</button>
            </div>
           
           
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        pokemons: state.AllPokemonsReducer.pokemons,
        allData: state.AllPokemonsReducer.allData,
        nextPage: state.AllPokemonsReducer.nextPage,
        previousPage: state.AllPokemonsReducer.previousPage
    }
}

export default connect(mapStateToProps, {setPokemonsThunkCreator:setPokemonsThunkCreator, setAllPokemonsDataThunkCreator:setAllPokemonsDataThunkCreator,
    setNextPageActionCreator:setNextPageActionCreator, setPrevPageActionCreator:setPrevPageActionCreator})(AllPokemons);
