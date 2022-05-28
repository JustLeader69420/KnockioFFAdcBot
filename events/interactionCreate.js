module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`${interaction.user.tag} triggered the "${interaction.commandName}" command in #${interaction.channel.name}.`);
	},
};