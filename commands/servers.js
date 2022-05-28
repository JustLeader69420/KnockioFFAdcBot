const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servers')
		.setDescription('Helps you customize the skins of the NPCs'),
	async execute(interaction) {
		await interaction.reply('The servers command will live here.');
	},
};
