import GrandChild from "./Grandchild";


function Child(props) {
    return (
        <>
            <GrandChild msg={props.msg} />
        </>
    )
}

export default Child;