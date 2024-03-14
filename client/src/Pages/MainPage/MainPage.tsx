import React from "react";
import classes from "./style/MainPage.module.css";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useAppSelector } from "../../store/reduxHooks";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  const showModal = useAppSelector(state => state.page.showModal)
  return (
    <div className={classes.wrapperPage}>
      <Header />
      <Outlet />
      <Footer />
      {showModal && <Modal />}
    </div>
  );
};

export default MainPage;
