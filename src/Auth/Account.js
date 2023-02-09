import { useAuth0 } from "@auth0/auth0-react";


const Account = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
    isAuthenticated && (
    <div className="account">
        <img src={user.picture} alt={user.name} />
        {/* <h3>{user.name}</h3> */}
        <p>{user.email}</p>
    </div>
    )
    )
}

export default Account