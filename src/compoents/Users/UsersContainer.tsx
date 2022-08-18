import React from 'react';
import {
    followUser,
    setCurrentPage, toggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollowUser,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store-redux";
import {Users} from "./Users";
import {Preloader} from "../../commons/Preloader";


class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.usersPage.pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
                this.props.setCurrentPage(1)
            })
            .finally(() => this.props.toggleIsFetching(false))
    }

    onPageClick(page: number) {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`, {
            withCredentials: true
        })
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setCurrentPage(page)
            })
            .finally(() => this.props.toggleIsFetching(false))
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
                    // followUser={this.props.followUser}
                    // unFollowUser={this.props.unFollowUser}
                       onFollowClick={this.onFollowClick.bind(this)}
                       onPageClick={this.onPageClick.bind(this)}/>
            </>
        )
    }
}


const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        usersPage: state.usersPage
    }
}
export default connect(mapStateToProps,
    {
        unFollowUser,
        followUser,
        setTotalUsersCount,
        setUsers,
        setCurrentPage,
        toggleIsFetching,
    } as MapDispatchType)(UsersContainer)

//types
type MapStateType = {
    usersPage: UsersPageType
}
type MapDispatchType = {
    setUsers: (users: Array<UserType>) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    followUser: (userId: number) => void
    unFollowUser: (userId: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type UsersContainerPropsType = MapStateType & MapDispatchType