import { useState } from "react"

export function Sum(props) {
    const [result, setResult] = useState(null);
    function add() {
        setResult(props.a + props.b)

    }
    return (
        <>
            <button onClick={add}>Sum</button>
            {result != null && (

                <h3>Sum of the two numbers is: {result}</h3>
            )}
        </>
    )
}