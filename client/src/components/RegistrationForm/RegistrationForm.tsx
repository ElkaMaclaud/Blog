import React, { FC, useEffect, useState } from "react"
import classes from "./style/RegistrationForm.module.css"
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import { AUTH_USER, REGISTR_USER, SET_TRANSISION, SET_USER_DATA } from "../../store/slice";
import { useNavigate } from "react-router-dom";

interface ActionCreators {
	[key: string]: any;
}
const actionCreators: ActionCreators = {
	REGISTR_USER,
	AUTH_USER
};

const RegistrationForm: FC<{ action: string}> = ({ action }) => {
	const { success, user, transition } = useAppSelector(state => state.page)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [email, setEmail] = useState(user.email)
	const [password, setPassword] = useState(user.password)
	const handleClick = () => {
		const actionFunction = actionCreators[action];
		if (actionFunction) {
			dispatch(actionFunction({ email, password }));
			dispatch(SET_USER_DATA({ email, password }))
		}
	};
	useEffect(() => {
		if (success && transition) {
			dispatch(SET_TRANSISION(false))
			navigate("/auth")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [success])
	return (
		<div className={classes.registration}>
			<h2 className={classes.registration__header}>{action === "REGISTR_USER" ? "Registration" : "Authorization"}</h2>
			<input value={email} onChange={(event) => setEmail(event.target.value.trim())} type="text" placeholder="Введите email..." />
			<input value={password} onChange={(event) => setPassword(event.target.value.trim())} type="password" placeholder="Введите пароль..." />
			<button className={classes.registration__btn} onClick={handleClick}>{action === "REGISTR_USER" ? "Sign up" : "Sign in"}</button>
		</div>
	)
}

export default RegistrationForm
