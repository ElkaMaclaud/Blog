import React from 'react';
import RegistrationForm from '../../UI_Components/RegistrationForm/RegistrationForm';
import classes from "./style/Registration.module.css"
import { Link } from 'react-router-dom';

const Registration = () => {

		return (
			<div className={classes.wrapper}>
				<RegistrationForm text={"Регистрация"} action={"REGISTR_USER"} />
				<Link to="../Auth">Уже есть аккаунт</Link>
			</div>

		);
};

export default Registration;