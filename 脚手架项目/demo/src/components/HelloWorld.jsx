import React, { memo, useContext } from "react";
import { UserContext, ThemeContext } from "../context";

const HelloWorld = memo(() => {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h2>User:{user.name}--{user.level}</h2>
            <h2 style={{ color: theme.color, fontSize: theme.size }}>Theme</h2> 
            {/* 给标签添加动态样式style={},然后{}内部又是一个对象，此对象的键值对为css样式 */}
        </div>
    )
})

export default HelloWorld;