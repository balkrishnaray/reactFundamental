import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  let myObj = {
    name: "balkrishna",
    age: 22,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind</h1>
      <Card username="Balkrishna" />
      <Card username="Killer"/>

    </>
  )
}

export default App
