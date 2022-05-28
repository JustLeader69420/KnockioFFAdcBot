module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Running! Logged in as ${client.user.tag}`);
	},
};