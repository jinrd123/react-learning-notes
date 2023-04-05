import { Link, useRoutes } from "react-router-dom"
import routes from "./router";
function App() {
  return (
    <div className="App">
      { useRoutes(routes) }
      <Link to="/about">通过Link标签转跳至About页面</Link>
      <br></br>
      <Link to="/home">通过Link标签转跳至Home页面</Link>
    </div>
  );
}

export default App;
