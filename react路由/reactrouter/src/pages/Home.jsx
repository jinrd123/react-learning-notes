import { Outlet } from "react-router-dom"
import ClassComponent from "./ClassComponent";
function Home() {
  return (
    <div>
      <ClassComponent test={123} />
      <div>{<div>123123213</div>}</div>
      Home页面
      <Outlet />
    </div>
  );
}
  
export default Home;
  