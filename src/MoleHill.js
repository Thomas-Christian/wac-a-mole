import { useEffect } from "react"

export default function MoleHill(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 12000)
        let timer = setTimeout(() => {
            props.change(true)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

 //if(props.displayMole === false)

    return (
        <div className="moleHill"> 
        <img 
        src="../molehill.png" 
        alt="mole"
        width="200em"> 
        </img>
        </div>
    )
   
}