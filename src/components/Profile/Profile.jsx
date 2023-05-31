import "./Profile.scss"
import { useContext } from "react"


import { AuthContext } from "../../contexts/AuthContext"
import { OrderListContainer } from "../OrderListContainer/OrderListContainer"

export const Profile = () => {

    const { user } = useContext(AuthContext)

    return(
        <div className="profile-container">
            <div className="user-info">
                <h3 className="title">My Profile</h3>
                <h3 className="text">{user.email}</h3>
            </div>
            <OrderListContainer/>
        </div>
    )
}