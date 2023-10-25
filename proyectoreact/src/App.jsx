import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/itemListContainer/ItemListContainer'


function App() {

  const greeting = "Bienvenidos espero que te pases seguido por aca"

  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje = {greeting}/>
    </>
  )
}

export default App
