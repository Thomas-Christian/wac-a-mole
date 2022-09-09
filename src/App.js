import './App.css';
import { useState } from 'react'
import MoleContainer from './MoleContainer';

function App() {

  let [score, setScore] = useState(0)
  const createHill = () => {
    let hills = []
    for (let i =0; i < 9; i++) {
      hills.push (
        <MoleContainer 
        key = {i}
        setScore={setScore}
        score={score} />
      )
    }
    return (
      <div className='hillsContainer'>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className='score'>
      Score: {score} 
      </h1>
      {createHill()}
    </div>
  );
}

export default App;
