const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator")
const { secret } = require("./config")
const fs = require('fs');

const generateAccessToken = (id) => {
	const payload = {
		id,
	}
	return jwt.sign(payload, secret, { expiresIn: "24h" })
}

const readFileUsers = () => {
	try {
		const currentData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
		return currentData.users;
	} catch (err) {
		console.error(err);
		return [];
	}
}
const readFileData = () => {
	try {
		const currentData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
		return currentData.data;
	} catch (err) {
		console.error(err);
		return [];
	}
}

const saveDataToFile = (newUser) => {
	try {
		const currentData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
		currentData.users.push(newUser);
		fs.writeFileSync('db.json', JSON.stringify(currentData, null, 2), { encoding: 'utf8', flag: 'w' });
	} catch (err) {
		console.error(err);
	}
};

class authController {
	async registration(req, res) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ success: false, message: "Ошибка при регистрации", errors })
			}
			const { email, password } = req.body
			const users = await readFileUsers()
			const candidate = users.find(u => u.email === email);

			if (candidate) {
				return res.status(400).json({ success: false, message: "Пользователь с таким именем уже существует" })
			}
			const hashPassword = bcrypt.hashSync(password, 7);
			const user = { email, password: hashPassword }
			saveDataToFile(user)
			return res.json({ success: true, message: "Пользователь был успешно заригистрирован"})
		} catch (e) {
			console.log(e)
			res.status(400).json({ success: false, message: "Registration error" })
		}
	}
	async login(req, res) {
		try {
			const { email, password } = req.body
			const users = await readFileUsers()
			const user = await users.find(u => u.email === email);
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
	async getData(req, res) {
		try {
			const data = await await readFileData()
			res.json(data)
		} catch (e) {
			res.status(400).json({ message: "Get data error" })
		}
	}
}

module.exports = new authController()