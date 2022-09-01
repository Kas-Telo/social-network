import React, {ComponentType} from 'react';
import {followUser, getUsers, unFollowUser, UsersPageType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {Users} from "./Users";
import {Preloader} from "../../commons/Preloader/Preloader";
import {compose} from "redux";
import {getUsersState} from "../../redux/users-selectors";


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
    }

    onPageClick(page: number) {
        this.props.getUsers(page, this.props.usersPage.pageSize)
    }

    onFollowClick(userId: number, followed: boolean) {
        if (followed)
            this.props.unFollowUser(userId)
        else
            this.props.followUser(userId)
    }

    render() {
        return (
            <>
                <div>{this.props.usersPage.isFetching && <Preloader/>}</div>
                <Users usersPage={this.props.usersPage}
                       onFollowClick={this.onFollowClick.bind(this)}
                       onPageClick={this.onPageClick.bind(this)}/>
            </>
        )
    }
}


const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        usersPage: getUsersState(state),
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {unFollowUser, followUser, getUsers,} as MapDispatchType),
    // WithAuthRedirect
)(UsersContainer)

//types
type MapStateType = {
    usersPage: UsersPageType
}
type MapDispatchType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
}
type UsersContainerPropsType = MapStateType & MapDispatchType