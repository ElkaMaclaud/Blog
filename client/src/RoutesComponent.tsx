import React from 'react'
import Registration from "./components/Registration/Registration";
import Auth from "./components/Registration/Auth";
import { Route, Routes } from 'react-router-dom';
import BlogPage from './components/BlogPage/BlogPage';
import NotfoundPage from './components/NotfoundPage/NotfoundPage';
import MainPage from './components/MainPage/MainPage';

const RoutesComponent = () => {
  return (
	  <Routes>
		  <Route path={"/"} element={<MainPage />}>
		  <Route
			  key={Math.random().toString(36)}
			  path={"/"}
			  element={<BlogPage />}
		  />
		  <Route
			  key={Math.random().toString(36)}
			  path={"/Auth"}
			  element={<Auth />}
		  />
		  <Route
			  key={Math.random().toString(36)}
			  path={"/Registration"}
			  element={<Registration />}
		  />
		  <Route path="*" element={<NotfoundPage />} />
		  </Route>
	  </Routes>
  )
}

export default RoutesComponent
