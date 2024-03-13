import React from "react";
import classes from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { Account } from "../../UI_Components/Account/Account";
const Header = () => {
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <Link to="../"><h3>На главную</h3></Link>
        <Link to="Registration"><div className={classes.icon}><Account />Войти</div></Link>
      </div>
    </div>
  );
};

export default Header;
