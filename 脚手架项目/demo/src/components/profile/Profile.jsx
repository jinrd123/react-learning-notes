import { memo } from 'react';
import profileStyle from "./Profile.module.css";

const Profile = memo(function() {

    return (
        // className中使用多个css类名——用()包裹；使用单个css类不需要()
        <div className={(profileStyle.section, profileStyle.anotherSection)}>
        	hello
        </div>
    )
})

export default Profile;