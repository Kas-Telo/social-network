import React, {ComponentType, useEffect} from 'react';
import {RootStateType} from "../../redux/store-redux";
import {connect} from "react-redux";
import {getProfile, getStatus, ProfilePageType, updateStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {getProfileState} from "../../redux/profile-selectors";
import {getAuthId, getIsAuthValue} from "../../redux/auth-selectors";

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
//
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
    let id: number | null = null

    id = params["*"] ? Number(params["*"]) : props.authId

    const updateStatus = (status: string) => {
        props.updateStatus(status)
    }

    useEffect(() => {
        if (id !== null) {
            props.getStatus(id)
            props.getProfile(id)
        }
    }, [id])

    return (
        <div>
            <Profile {...props} profile={props.profilePage.profile} status={props.profilePage.status}
                     updateStatus={updateStatus} authProfile={id === props.authId}/>
        </div>
    );

}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: getProfileState(state),
        authId: getAuthId(state),
        isAuth: getIsAuthValue(state),
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,
        {getProfile, getStatus, updateStatus} as MapDispatchPropsType),
    WithAuthRedirect
)(ProfileContainer)

//types
type MapStatePropsType = {
    profilePage: ProfilePageType
    authId: number | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType