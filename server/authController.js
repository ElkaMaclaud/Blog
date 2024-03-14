const User = require("./models/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator")
const { secret } = require("./config")

const generateAccessToken = (id) => {
	const payload = {
		id,
	}
	return jwt.sign(payload, secret, { expiresIn: "24h" })
}

class authController {
	async registration(req, res) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ success: false, message: "Ошибка при регистрации", errors })
			}
			const { email, password } = req.body
			const candidate = await User.findOne({ email })
			if (candidate) {
				return res.status(400).json({ success: false, message: "Пользователь с таким именем уже существует" })
			}
			const hashPassword = bcrypt.hashSync(password, 7);
			const user = new User({ email, password: hashPassword })
			await user.save()
			return res.json({ success: true, message: "Пользователь был успешно заригистрирован" })
		} catch (e) {
			console.log(e)
			res.status(400).json({ success: false, message: "Registration error" })
		}
	}

	async login(req, res) {
		try {
			const { email, password } = req.body
			const user = await User.findOne({ email })
			if (!user) {
				return res.status(400).json({ message: `Пользователь с таким ${email} не найден` })
			}
			const validatePassword = bcrypt.compareSync(password, user.password)
			if (!validatePassword) {
				return res.status(400).json({ message: `Введен неверный пароль` })
			}
			const token = generateAccessToken(user._id)
			return res.json({ token })
		} catch (e) {
			console.log(e)
			res.status(400).json({ message: "Login error" })

		}
	}

	async getUsers(req, res) {
		try {
			const users = await User.find()
			res.json(users)
		} catch (e) {

		}

	}
}

module.exports = new authController()