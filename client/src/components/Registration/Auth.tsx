import React from 'react';
import RegistrationForm from '../../UI_Components/RegistrationForm/RegistrationForm';
import classes from "./style/Registration.module.css"
import { Link } from 'react-router-dom';

const Auth = () => {
	return (
		<div className={classes.wrapper}>
			<RegistrationForm text={"Авторизация"} action={"AUTH_USER"} />
			<Link to="../Registration">Зарегистрироваться</Link>
		</div>
	)

};

export default Auth;