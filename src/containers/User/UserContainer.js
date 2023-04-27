import { useSelector } from "react-redux";
import { selectUserById } from "@/store/entities/user/selectors";

export const UserContainer = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, { userId }))
    return (
        <span>{ user.name }</span>
    )

}