import { Routes, Route, Navigate, Link } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Rank from "./pages/Rank";
import Recommend from "./pages/Recommend";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* 对于顶层路由，如这里的/home和/about，如果页面的url匹配成功后就会自动显示 */}
        {/* 但是对于嵌套路由（子路由）组件，需要在父路由组件中想展示的地方用<Outlet />组件占位 */}
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />}>
          {/* 使用Navigate组件进行重定向，/home定向到/home/recommend */}
          <Route path='/home' element={<Navigate to="/home/recommend" />} />
          <Route path='/home/recommend' element={<Recommend />} />
          <Route path='/home/rank' element={<Rank />} />
        </Route>
        <Route path='/about' element={<About />} />
        {/* 使用通配符 * 匹配以上配置外的所有路由情况 */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Link to="/about">通过Link标签转跳至About页面</Link>
      <br></br>
      <Link to="/home">通过Link标签转跳至Home页面</Link>
    </div>
  );
}

export default App;
