import React from "react";
import classes from "./style/MainPage.module.css";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { useAppSelector } from "../../store/reduxHooks";

const MainPage = () => {
  const showModal = useAppSelector(state => state.page.showModal)
  return (
    <div className={classes.wrapperPage}>
      <Header />
      <Outlet />
      {showModal && <Modal />}
    </div>
  );
};

export default MainPage;
