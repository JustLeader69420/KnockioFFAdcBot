const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Helps you customize the skins of the NPCs'),
	async execute(interaction) {
		await interaction.reply('The commands command will live here.');
	},
};
