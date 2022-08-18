import React from 'react';
import {User} from "./User/User";
import style from "./Users.module.css";
import {UsersPageType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: UsersPageType
    // followUser: (userId: number) => void
    // unFollowUser: (userId: number) => void
    onFollowClick: (userId: number, followed: boolean) => void
    onPageClick: (page: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let pagesView = pages.map((el, i) => {
        return <span key={i}
                     className={props.usersPage.currentPage === el ? style.selectedPage : ''}
                     onClick={() => props.onPageClick(el)}>
            {el}</span>
    })
    let users = props.usersPage.users.map(el => {
        return <User key={el.id} user={el}
                     // followUser={props.followUser}
                     // unFollowUser={props.unFollowUser}
                     onFollowClick={props.onFollowClick}/>
    })

    return (
        <div>
            {pagesView}
            {users}
        </div>
    )
};