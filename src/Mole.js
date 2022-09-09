import { useEffect } from "react"

export default function Mole(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.change(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

 //if(props.displayMole === true)

    return (
        <div className="mole" onClick={() => props.moleBop()}> 
        <img 
        src="../mole.png" 
        alt="mole"
        width="200em"> 
        </img>
        </div>
    )

}