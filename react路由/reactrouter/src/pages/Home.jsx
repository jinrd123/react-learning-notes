import { Outlet } from "react-router-dom"
function Home() {
  return (
    <div>
      Home页面
      <Outlet />
    </div>
  );
}
  
export default Home;
  