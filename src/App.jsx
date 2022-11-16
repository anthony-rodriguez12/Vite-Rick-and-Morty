import React from 'react'
import CharacterList from './components/CharacterList'

function App() {

  

  return (
    <div className='bg-dark vh-100 vw-100 text-white'>
      <div>
        <h1 className='text-center display-1 py-4'>The Rick and Morty</h1>
      </div>
      <section className='container'>
        <CharacterList/>
      </section>
    </div>
  )
}

export default App