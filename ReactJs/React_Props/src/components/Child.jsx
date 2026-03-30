import React from "react";

export function Child(props) {

    return (
        <>
            {/* <h1>Data that is coming from App components is ==: {props.name}</h1>
            <h2>Age is :{props.age}</h2> */}
            <h3>Name through object is :{props.data.name}</h3>
            <h3>Age through object is :{props.data.age}</h3>
            <h3>Education through object is :{props.data.education}</h3>
            <h2>Uname is: {props?.u}</h2>
        </>
    )
}