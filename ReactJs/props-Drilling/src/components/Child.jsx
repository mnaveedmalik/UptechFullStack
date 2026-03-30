import GrandChild from "./GrandChild";

function Child(props) {
    return (
        <>
            <GrandChild msg={props.msg} />
        </>
    )
}

export default Child;