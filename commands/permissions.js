const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('permissions')
		.setDescription('Helps you customize the skins of the NPCs'),
	async execute(interaction) {
		await interaction.reply('The permissions command will live here.');
	},
};
