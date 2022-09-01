import {instance} from "./axiosInstance";

export const profileApi = {
    getProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status})
            .then(res => res.data)
    },

}