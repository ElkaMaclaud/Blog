import React, { FC, useState } from 'react'
import classes from "./style/RegistrationForm.module.css"
import { useAppDispatch } from '../../store/reduxHooks';
import { AUT_USER, REGISTR_USER } from '../../store/slice';

interface ActionCreators {
	[key: string]: any;
}
const actionCreators: ActionCreators = {
	REGISTR_USER,
	AUT_USER
};

const RegistrationForm: FC<{action: string; text: string}> = ({action, text}) => {
	const dispatch = useAppDispatch()
	const [email, setemail] = useState("")
	const [password, setPassword] = useState("")
	const handleClick = () => {
		const actionFunction = actionCreators[action];
		if (actionFunction) {
			dispatch(actionFunction({ email, password }));
		} 
	};
  return (
		<div className={classes.registration}>
			<h2 className={classes.registration__header}>{text}</h2>
			<input value={email} onChange={(event) => setemail(event.target.value)} type="text" placeholder="Введите email..." />
			<input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Введите пароль..." />
		  <button className={classes.registration__btn} onClick={handleClick}>{text}</button>

		</div>
  )
}

export default RegistrationForm
