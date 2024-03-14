const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose")
const authRouter = require("./authRouter")
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors({
	"Access- Control - Allow - Origin" : '*' 
}));
app.use(express.json())
app.use("/auth", authRouter)
//console.log("//////////////////", process.env.PASSWORD, process.env.PORT)
const start = async () => {
	try {
		await mongoose.connect(`mongodb+srv://elkamaclaud:${process.env.PASSWORD || "62sH5glEwMjvCJr5"}@cluster0.9bh0b0z.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0`)
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()