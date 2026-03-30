
import { useEffect, useState } from "react"

export function Welcome() {
    const [message, setMessage] = useState(" ");
    useEffect(() => {
        setMessage("Wellcome  to naveed sir ")

    }, [])// it runs only once 
    return (
        <>
            <h1>Here we: {message}</h1>
        </>
    )
}

