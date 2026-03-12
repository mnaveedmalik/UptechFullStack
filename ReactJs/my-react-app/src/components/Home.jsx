import React, { Fragment, useState } from "react";
import reactLogo from '../assets/react.svg'



export function Home() {
    const [array, setArray] = useState([{ name: "Naveed", age: 56 }, { name: "Haseeb Malik", age: 34 }]);
    return (

        <>
            <h1>Hello Home </h1>
            <img src={reactLogo} />

            {
                array.map((std, i) => {
                    return (

                        <Fragment key={i}>

                            <h1>{std.name}</h1>
                            <h1>{std.age}</h1>
                        </Fragment>
                    )
                })

            }

        </>
    )
}