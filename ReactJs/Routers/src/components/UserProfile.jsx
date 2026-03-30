import { useParams } from "react-router-dom";

export function UserProfile() {
    const { id } = useParams(); // useParams hook se URL se param le rahe hain
    return <h2>User ID: {id}</h2>;
}