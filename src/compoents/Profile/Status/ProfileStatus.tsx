import React, {ChangeEvent} from 'react';
import {StatusType} from "../../../redux/profile-reducer";

type ProfileStatusPropsType = {
    status: StatusType
    updateStatus: (status: string) => void
    authProfile: boolean
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        status: {
            text: this.props.status.text,
            maxLength: this.props.status.maxLengthText
        },
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
                // status: {
                //     text: this.props.status.text
                // },
                editMode: true,
            }
        )
    }
    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status.text.trim())
    }

    changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: {
                text: e.currentTarget.value
            }
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>) {
        if(prevProps.status.text !== this.props.status.text){
            this.setState({
                status: {
                    text: this.props.status.text
                }
            })
            console.log('setState')
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.authProfile && this.state.editMode
                        ? <div>
                            <input type="text" value={this.state.status.text}
                                   onChange={this.changeStatusHandler}
                                   onBlur={this.deactivateEditMode} autoFocus/>
                        </div>
                        : <div>
                            <span
                                onDoubleClick={this.activateEditMode}>{this.props.status.text ? this.props.status.text : `No status`}</span>
                        </div>
                    }
                </div>

            </div>
        )
    }
}

//
// export const Status = (props: ProfileStatusPropsType) => {
//     const [status, setStatus] = useState('')
//     const [editMode, setEditMode] = useState(false)
//
//
//     const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setStatus(e.currentTarget.value)
//     }
//
//     const onBlurHandler = () => {
//
//
//             setEditMode(false)
//
//     }
//
//     const startEditMode = () => setEditMode(true)
//
//     const onSaveStatusClick = () => {
//         if (status.length > props.status.maxLengthText) {
//             alert('Max Number Of symbols exceeded ' + props.status.maxLengthText)
//         } else {
//             props.updateStatus(status.trim())
//
//             setEditMode(false)
//         }
//     }
//
//     useEffect(() => {
//         setStatus(props.status.text)
//     }, [props.status.text])
//
//     return (
//
//         <div>
//             <div>
//                 {editMode && authProfile
//                     ? <div >
//                         <input type="text" value={status} onChange={changeStatusHandler} autoFocus />
//                         <button onClick={onSaveStatusClick}>Change status</button>
//                         <button onClick={onBlurHandler}>Cancel changes</button>
//                     </div>
//                     : <div>
//                         <span>{props.status.text}
//                             {authProfile &&
//                                 <button onClick={startEditMode}>Edit</button>}
//                             </span>
//                     </div>
//                 }
//             </div>
//
//         </div>
//     );
// };


