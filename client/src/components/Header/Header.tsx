import React from "react";
import classes from "./style/Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={classes.headerWrapper}>
        <div className={classes.header}>
          <Link to="">Works</Link>
          <Link to="">Blog</Link>
          <Link to="">Contact</Link>
        </div>
    </div>
  );
};

export default Header;
