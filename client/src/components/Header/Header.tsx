import React, { useRef, useState } from "react";
import classes from "./style/Header.module.css";
import { Burger, Cross } from "../../UI_Components";
import Links from "../Links/Links";
import { Dropdown } from "../Dropdown/Dropdown";

const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false)
  const list = ["Works", "Blog", "Contact"]
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <div className={classes.headerMobile} onClick={() => setActive(!active)}>
          {active ?
            <div>
              <Cross />
              <Dropdown ref={ref} list={list} />
            </div>
            : <Burger />
          }
        </div>
        <div className={classes.headerLiks}><Links list={list} /></div>
      </div>
    </div>
  );
};

export default Header;
