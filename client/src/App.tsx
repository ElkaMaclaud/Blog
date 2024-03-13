import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./store/reduxHooks";
import BlogPage from "./components/BlogPage/BlogPage";
import Registration from "./components/Registration/Registration";


function App() {
  const page = useAppSelector(state => state.page.typePosition)
  if (page === "BLOG") {
    return <BlogPage />;
  }
  if (page === "REGISTRATION") {
    return <Registration />;
  }
  if (page === "AUTH") {
    return <Registration />
  }

  return (
    <Routes>
      <Route
        key={Math.random().toString(36)}
        path={"/"}
        element={<BlogPage />}
      />
      ;
    </Routes>
  );
}

export default App;
