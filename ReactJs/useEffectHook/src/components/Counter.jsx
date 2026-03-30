import { useState, useEffect } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]); // count change hone par run hoga

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}
