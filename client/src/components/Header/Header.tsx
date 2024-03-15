import React, {useRef, useState } from "react";
import classes from "./style/Header.module.css";
import { Link } from "react-router-dom";
import { Burger, Cross, Dropdown } from "../../UI_Components";
const Header = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false)
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.header}>
        <div className={classes.headerMobile} onClick={() => setActive(!active)}>
          {active ?
            <div>
              <Cross />
              <Dropdown ref={ref}>
                <React.Fragment>
                  <Link to="/Works">Works</Link>
                  <Link to="/Blog">Blog</Link>
                  <Link to="/Contact">Contact</Link>
                </React.Fragment>
              </Dropdown>
            </div>
            : <Burger />
          }
        </div>
          <Link to="/Works">Works</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
