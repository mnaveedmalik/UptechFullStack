import React, { useState } from 'react'

export const Sum = (props) => {
    const [result, setResult] = useState(null);
    function add() {

        setResult(props.a + props.b);


    }

    return (
        <>
            <button onClick={add}>Sum</button>
            <h1>Sum through the props is :{result}</h1>

        </>
    )
}

