import { useNavigate } from "react-router-dom";

function withRouter(WrapperComponent) {
  // 高阶函数接收一个类组件返回一个函数组件，函数组件的内容说白了还是接收的类组件，但是多了这层函数组件的包裹，这层包裹中就可以调用hook函数，然后通过props的形式把navaigate函数传递给类组件供其使用
  return function(props) {
    const navigate = useNavigate();
    const router = { navigate };
    
    return <WrapperComponent {...props} router={router} />
  }
}

export default withRouter;