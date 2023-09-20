
import { useContext } from 'react';
import './App.css';
import { Card } from './components/card/Card';
import {  Cards } from './components/card/Cards';
import { CustomContext } from './Context';

function App() {
  const {  setMoves,setVisible } = useContext(CustomContext);
  return (
    <div className="App">
          <div className='container'>
              <div className='cardDisplay'>
                    <div className='cardDisplay__title'>Memory Game</div>
                    
                    <div className='cardDisplay__content'>
                         <Cards />
                    </div>
                    <button className='cardDisplay__restartBtn' onClick={()=>{
                           window.location.reload()
                      }}>Restart</button>
                   
              </div>
          </div>
    </div>
  );
}

export default App;
