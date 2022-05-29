module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		let timestamp = Date.now();
		console.log(`${Math.floor(timestamp/1000)} | ${interaction.user.tag} triggered the "${interaction.commandName}" command in #${interaction.channel.name} (${interaction.channel.id})`);
	},
};