import React, { useEffect } from 'react'
import './Main.css';
import Village from './Village';
import { connect } from 'react-redux';
import { getVillagesThunkCreator } from '../../redux/homePageReducer';



const Main = (props) => {

    const getVillages = () => {
        props.getVillagesThunkCreator()
    }

    useEffect(() => {
        getVillages();
    }, [])

    let villageData = props.villages.map((el) => {
        return (<Village id = {el.id} allCount={props.allCount} name = {el.name} url = {el.url}/>)
    })
    

    return (
        <div className='wrapper'>
            <div className='wrapper_title'><h1>Poke types</h1></div>
            <div className='villages'>      
            {villageData}  
           
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        villages: state.homePageReducer.villages,
        allCount: state.MyPokemonsReducer.allCount
    }
    
}

export default connect(mapStateToProps, {getVillagesThunkCreator:getVillagesThunkCreator} )(Main);
