//function CountButton(){
    //<div>
        //<button>+1</button>
        //<div>0</div>
    //</div>
//}
import { useState, useEffect } from "react"

export default function CountButton(props) {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    useEffect(rollOverCount, [count])
    return (
        <div>
        <button onClick = {handleClick}> button </button>
        <div>{count}</div>
        </div>
    )
}