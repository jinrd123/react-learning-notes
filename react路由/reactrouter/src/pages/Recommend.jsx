import { useNavigate } from "react-router-dom";
function Recommend() {
  const navigate = useNavigate();
  return (
    <div>
      Home页面下的Recommend子路由组件
      <button onClick={e => navigate("/about")}>Recommend组件中的一个按钮，点击后转跳至About页面</button>
    </div>
  );
}
  
export default Recommend;
  