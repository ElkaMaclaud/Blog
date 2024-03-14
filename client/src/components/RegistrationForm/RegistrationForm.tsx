import React, { FC, useState } from 'react'
import classes from "./style/RegistrationForm.module.css"
import { useAppDispatch, useAppSelector } from '../../store/reduxHooks';
import { AUTH_USER, REGISTR_USER } from '../../store/slice';
import { useNavigate } from 'react-router-dom';

interface ActionCreators {
	[key: string]: any;
}
const actionCreators: ActionCreators = {
	REGISTR_USER,
	AUTH_USER
};

const RegistrationForm: FC<{ action: string; text: string }> = ({ action, text }) => {
	const success = useAppSelector(state => state.page.success)
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [email, setemail] = useState("")
	const [password, setPassword] = useState("")
	const handleClick = () => {
		const actionFunction = actionCreators[action];
		if (actionFunction) {
			dispatch(actionFunction({ email, password }));
			if (action === "REGISTR_USER" && success) {
				navigate("/auth")
			}
		}
	};
	return (
		<div className={classes.registration}>
			<h2 className={classes.registration__header}>{text}</h2>
			<input value={email} onChange={(event) => setemail(event.target.value)} type="text" placeholder="Введите email..." />
			<input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Введите пароль..." />
			<button className={classes.registration__btn} onClick={handleClick}>Sign in</button>
		</div>
	)
}

export default RegistrationForm
