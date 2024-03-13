import React from 'react';
import RegistrationForm from '../../UI_Components/RegistrationForm/RegistrationForm';
import { useAppSelector } from '../../store/reduxHooks';
import classes from "./style/Registration.module.css"
import { Link } from 'react-router-dom';

const Registration = () => {
	const page = useAppSelector(state => state.page.typePosition)

	if (page === "REGISTRATION") {
		return (
			<div className={classes.wrapper}>
				<RegistrationForm text={"Регистрация"} action={"REGISTR_USER"} />
				<Link to="AUTH">Уже есть аккаунт</Link>
			</div>

		);
	}
	return (
		<div className={classes.wrapper}>
			<RegistrationForm text={"Авторизация"} action={"AUTH_USER"} />
			<Link to="REGISTRATION">Зарегистрироваться</Link>
		</div>
	)

};

export default Registration;