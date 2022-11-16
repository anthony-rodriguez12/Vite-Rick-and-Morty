import React, {useState,useEffect} from "react";
import Character from './Character'
import ReactLoading from 'react-loading';

function CharacterList() {
  const [characters, setCharacter] = useState([])
  const [loading, setloading] = useState(true)
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://rickandmortyapi.com/api/character')
      const data = await response.json()
      console.log(data.results);
      setloading(false)
      setCharacter(data.results)
    }

    fetchData()
  }, [])
  
  return (
    <div className="grid row align-items-md-stretch">
      {
      loading ? 
      <div className="container">
      <ReactLoading type={'spin'} color={'#DC3545'} height={'35%'} width={'35%'} />
      </div> 
      :
      characters.map((character) => {
        return (
          <div className="col-md-6 p-2" key={character.id}>
            <Character character={character}/>
          </div>
        );
      })
      }
    </div>
  );
}

export default CharacterList;
