import React, { CSSProperties, forwardRef, ReactNode } from "react";
import classes from "./style/Dropdown.module.css";

interface DropdownProps {
  children: ReactNode;
  style?: CSSProperties;
}
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ children, style }, ref) => {
    return (
      <div
        ref={ref}
        className={classes.container}
        style={style}
      >
        {children}
      </div>
    );
  }
);
