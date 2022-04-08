import {connect} from "react-redux";
import {ActionType, RootStateType} from "../../redux/store-redux";
import {
    followAC,
    setCurrentPage, setTotalUsersCount,
    setUsersAC,
    unfollowAC,
    UserForUsersPageType,
} from "../../redux/usersPageReducer";
import React from "react";
import axios from "axios";
import s from "./Users.module.css";
import {Users} from "./Users";

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onClickPages = (page: number) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(
            response => this.props.setUsers(response.data.items)
        )
    }

    render() {
        return (
            <div>
                <Users users={this.props.users}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onClickPages={this.onClickPages}/>
            </div>
        )
    }
}


type MapStateToPropsType = {
    users: Array<UserForUsersPageType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserForUsersPageType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: (action:ActionType) => void): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserForUsersPageType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page: number) => {dispatch(setCurrentPage(page))},
        setTotalUsersCount: (count:number) => {dispatch(setTotalUsersCount(count))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
