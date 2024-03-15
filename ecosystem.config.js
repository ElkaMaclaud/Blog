module.exports = {
	apps: [
		{
			name: "client",
			script: "npm",
			args: "run client",
			cwd: "C:/Users/elkam/OneDrive/Документы/PersonalBlog/client", 
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "1G"
		},
		{
			name: "server",
			script: "npm",
			args: "run server",
			cwd: "C:/Users/elkam/OneDrive/Документы/PersonalBlog/server", 
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: "1G"
		}
	]
};

