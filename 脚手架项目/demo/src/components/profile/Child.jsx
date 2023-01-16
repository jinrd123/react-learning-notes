import React, { memo } from 'react';
const Child = memo(function (props) {
    const { increment } = props;
    return (
        // 此组件非常庞大,有非常多的子组件，不适合频繁的重复渲染
        <button onClick={increment}>+1</button>
    );
})

export default Child;