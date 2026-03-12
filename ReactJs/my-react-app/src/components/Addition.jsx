import { useState } from "react"

export function Addition() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(10);
    const [sum, setSum] = useState(a + b);
    return (
        <h1>Sum is :{sum}</h1>
    )
}