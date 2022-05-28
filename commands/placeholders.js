const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('placeholders')
		.setDescription('Helps you customize the skins of the NPCs'),
	async execute(interaction) {
		await interaction.reply('The placeholders command will live here.');
	},
};
