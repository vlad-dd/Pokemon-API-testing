import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import { Route } from 'react-router'
import AllPokemons from './Components/AllPokemons/AllPokemons'
import MyPokemons from './Components/MyPokemons/MyPokemons'
import Login from './Components/Login/Login'
import TypeInfo from './Components/Main/TypeInfo'

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/main" render={() =>  <Main />}/>
      <Route path="/all" render={() => <AllPokemons />}/>
      <Route path="/my" render={() => <MyPokemons />}/>
      <Route path="/login" render={() => <Login />}/>
      <Route path="/info" render={() => <TypeInfo />}/>
      <Footer />

      
    
    </div>
  )
}

export default App
