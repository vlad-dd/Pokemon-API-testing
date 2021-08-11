import React from 'react'
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <NavLink to='/main'>
        <header className='main'>
            <div className='header_item'>
                <div className='title'>My Pokemons</div>
               <NavLink to='/my'><img className='active_icons' src='https://image.flaticon.com/icons/png/512/287/287221.png' /></NavLink>
            </div>

            <div className='header_item'>
               <div className='title'>All Pokemons</div> 
               <NavLink to='/all'><img className='active_icons' src='https://image.flaticon.com/icons/png/512/188/188990.png' /></NavLink>
            </div>

            <div className='header_item'>
                <div className='title'>Login</div>
            <NavLink to='/login'><img className='active_icons' src='https://image.flaticon.com/icons/png/512/362/362003.png' /></NavLink>  
            </div>

        </header>
        </NavLink>
    )
}

export default Header
