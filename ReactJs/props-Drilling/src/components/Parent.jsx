import Child from "./Child";


function Parent(props) {
    return (
        <><Child msg={props.msg} /></>
    )
}

export default Parent;