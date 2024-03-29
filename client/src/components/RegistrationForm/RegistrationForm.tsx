import React, { FC, useEffect, useState } from "react";
import classes from "./style/RegistrationForm.module.css";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import {
  AUTH_USER,
  REGISTR_USER,
  SET_TRANSISION,
  SET_USER_DATA,
} from "../../store/slice";
import { useNavigate } from "react-router-dom";

interface ActionCreators {
  [key: string]: any;
}
const actionCreators: ActionCreators = {
  REGISTR_USER,
  AUTH_USER,
};

const RegistrationForm: FC<{ action: string }> = ({ action }) => {
  const { success, user, transition } = useAppSelector((state) => state.page);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: user.email,
    password: user.password,
  });
  const handleClick = (event: any) => {
    event.preventDefault();
    const actionFunction = actionCreators[action];
    if (actionFunction) {
      dispatch(actionFunction({ ...formData }));
      dispatch(SET_USER_DATA({ ...formData }));
    }
  };
  useEffect(() => {
    if (success && transition) {
      dispatch(SET_TRANSISION(false));
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);
  return (
    <div className={classes.registration}>
      <h2 className={classes.registration__header}>
        {action === "REGISTR_USER" ? "Registration" : "Authorization"}
      </h2>
      <form className={classes.registration} onSubmit={handleClick}>
        <input
          value={formData.email}
          name="email"
          onChange={(event) =>
            setFormData((user) => ({
              ...user,
              email: event.target.value.trim(),
            }))
          }
          type="text"
          placeholder="Введите email..."
        />
        <input
          value={formData.password}
          name="password"
          onChange={(event) =>
            setFormData((user) => ({
              ...user,
              password: event.target.value.trim(),
            }))
          }
          type="password"
          placeholder="Введите пароль..."
        />
        <button
          className={classes.registration__btn}
          disabled={!formData.email || !formData.password}
        >
          {action === "REGISTR_USER" ? "Sign up" : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
