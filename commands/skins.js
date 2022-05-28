const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skins')
		.setDescription('Helps you customize the skins of the NPCs'),
	async execute(interaction) {
		await interaction.reply('The skins command will live here.');
	},
};
