import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await a.json()
    //console.log(data)
    setCards(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
      <Navbar />
      <div className="container flex flex-wrap mx-8">
        {cards.map((card)=>{
          return(
            <div className="max-w-sm bg-white rounded-xl overflow-hidden shadow-md m-3">
              <div className="px-6 py-4">
                
                  <div className="font-bold text-xl mb-2"> {card.title}</div>
                  <p className="text-gray-700 text-base ">
                    {card.body}
                  </p>
                
                <span>By : UserId : {card.id}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}


export default App
