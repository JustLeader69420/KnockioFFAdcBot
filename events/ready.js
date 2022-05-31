module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		let timestamp = Date.now();
		console.log(`${Math.floor(timestamp/1000)} | Running... Logged in as ${client.user.tag}.`);
		client.user.setActivity('you :)', { type: 'WATCHING' });
	},
};