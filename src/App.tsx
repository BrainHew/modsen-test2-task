import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { routes } from "./constants/routesConst";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
