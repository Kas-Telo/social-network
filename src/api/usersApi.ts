import {instance} from "./axiosInstance";

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followUser(userId: number) {
        return instance.post(`follow/${userId}`, {})
    },
    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}