import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BlogPage from "./components/BlogPage/BlogPage";
import MainPage from "./components/MainPage/MainPage";
import Auth from "./components/Registration/Auth";
import Registration from "./components/Registration/Registration";
import NotfoundPage from "./components/NotfoundPage/NotfoundPage";
import { useAppSelector } from "./store/reduxHooks";

function App() {
  const token = useAppSelector(state => state.page.token)
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    } else {
      navigate("/registration", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <Routes>
      <Route path={"/"} element={<MainPage />}>
        <Route
          key={Math.random().toString(36)}
          path={"/home"}
          element={<BlogPage />}
        />
        <Route
          key={Math.random().toString(36)}
          path={"/auth"}
          element={<Auth />}
        />
        <Route
          key={Math.random().toString(36)}
          path={"/registration"}
          element={<Registration />}
        />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  )
}

export default App;
