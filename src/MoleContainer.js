import { useState } from 'react'
import Mole from './Mole'
import MoleHill from './MoleHill'

export default function MoleContainer(props){

    let [displayMole, noDisplayMole] = useState(false)

    const moleBop = (e) => {
        props.setScore(props.score + Number(1))
        noDisplayMole(false)
    }

    let toggleMole = displayMole ? <Mole moleBop={moleBop} change={noDisplayMole} displayMole={displayMole}/> : <MoleHill change={noDisplayMole}/>

    return (
        <div className='moleOption'>
        {toggleMole}
        </div>
    )
}
