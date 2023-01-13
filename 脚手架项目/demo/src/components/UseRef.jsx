import { memo, useRef } from 'react'

const UseRef = memo(function UseRef() {
    const containerRef = useRef();
    function showContainerDom() {
        console.log(containerRef.current);
    }
    return (
        <div ref={containerRef}>
            hello
            <button onClick={showContainerDom}>点击显示绑定的dom</button>
        </div>
    )
})

export default UseRef;
