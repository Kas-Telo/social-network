import {connect} from "react-redux";
import {SideBarFriends} from "./SideBarFriends";
import {RootStateType} from "../../../redux/store-redux";
import {Dispatch} from "redux";
import {FriendType} from "../../../redux/sidebar-reducer";

type MapStateToPropsType = {
    friendsData: FriendType[]
}
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        friendsData: state.sideBar.friends
    }
}
type MapDispatchToPropsType = {

}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

    }
}

export const SideBarFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(SideBarFriends)