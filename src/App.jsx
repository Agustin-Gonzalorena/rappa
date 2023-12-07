import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import routes from "./routes.js";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route path={path} element={<Component />} key={path} />
        ))}
      </Routes>
    </>
  );
}

export default App;
