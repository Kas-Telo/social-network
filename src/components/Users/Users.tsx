import React from 'react';
import {UserForUsersPage} from "./UserForUsersPage";
import s from './Users.module.css'
import {UserForUsersPageType} from "../../redux/usersPageReducer";

type UsersPropsType = {
    users: Array<UserForUsersPageType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onClickPages: (page: number) => void
}

export const Users = (props: UsersPropsType) => {

    let allPages: Array<number> = []
    let totalCountPages = Math.ceil(props.totalUsersCount / props.pageSize)
    for (let i = 1; i <= totalCountPages; i++) {
        allPages.push(i)
    }

    const pagesNumbers = allPages.map((p, index) => {
        return <span key={index}
                     className={props.currentPage === p ? s.selectPage : ''}
                     onClick={() => props.onClickPages(p)}>{p}</span>
    })
    console.log('pg-numbers', pagesNumbers)
    const users = props.users.map((el, index) => {
        return <UserForUsersPage key={index} user={el} follow={props.follow} unfollow={props.unfollow}/>
    })
    return (
        <div className={s.container}>
            {pagesNumbers}
            {users}
        </div>
    );
};