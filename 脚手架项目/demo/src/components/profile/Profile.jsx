import { memo } from 'react';
import profileStyle from "./Profile.module.css";
import Child from './Child';
import { useState } from 'react';
import { useCallback } from 'react';

const Profile = memo(function() {

    const [count, setCount] = useState(0);
    const increment = useCallback(function() {
        setCount(count+1);
    },[])
    return (
        // className中使用多个css类名——用()包裹；使用单个css类不需要()
        <div className={(profileStyle.section, profileStyle.anotherSection)}>
        	hello
            {count}
            <Child increment={increment}></Child>
        </div>
    )
})

export default Profile;