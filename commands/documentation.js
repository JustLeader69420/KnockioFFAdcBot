const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('documentation')
		.setDescription('Returns the link to the plugin Documentation'),
	async execute(interaction) {
		await interaction.reply("You can find documentation about the plugin's config files and more at **<https://knockioffa.justleader.eu/>**.");
	},
};
