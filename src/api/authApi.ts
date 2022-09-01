import {instance} from "./axiosInstance";
import {FormDataType} from "../compoents/Login/LoginForm/LoginForm";

export const authApi = {
    getMe(){
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login( formData: FormDataType){
        return instance.post(`auth/login`, formData)
            .then(res => res.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(res => res.data)
    }
}