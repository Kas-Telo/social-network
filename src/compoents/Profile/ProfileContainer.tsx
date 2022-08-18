import React, {useEffect} from 'react';
import {RootStateType} from "../../redux/store-redux";
import {connect} from "react-redux";
import {ProfilePageType, ProfileType, setProfile} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import axios from "axios";
import {useParams} from "react-router-dom";

// class ProfileContainer extends React.Component<ProfileContainerPropsType> {
//
//     paramUserId = 2
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.paramUserId}`)
//             .then(res => {
//                 this.props.setProfile(res.data)
//                 console.log('fetch finished')
//             })
//     }
//     setParamUserId(param: number){
//         this.paramUserId = param
//         debugger
//     }
//
//     render() {
//         return (
//             <div >
//                 <Profile {...this.props} profile={this.props.profilePage.profile} setParamUserId={this.setParamUserId.bind(this)}/>
//             </div>
//         );
//     }
// };
const ProfileContainer = (props: ProfileContainerPropsType) => {
    const params = useParams<'*'>()
    let id: number
    id = params["*"] ? Number(params["*"]) : (props.authId ? props.authId : -1)
    useEffect(() => {
        if (id !== -1) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                .then(res => {
                    props.setProfile(res.data)
                })
        }
    }, [id])

    return (
        <div>
            <Profile {...props} profile={props.profilePage.profile}/>
        </div>
    );

}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
        authId: state.auth.id
    }
}
export default connect(mapStateToProps,
    {setProfile} as MapDispatchPropsType)(ProfileContainer)

//types
type MapStatePropsType = {
    profilePage: ProfilePageType
    authId: number | null
}
type MapDispatchPropsType = {
    setProfile: (profile: ProfileType) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType