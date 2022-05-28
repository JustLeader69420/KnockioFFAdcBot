const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('placeholders')
		.setDescription('Returns a list of placeholders you can use in holograms and such'),
	async execute(interaction) {
		

		// https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
		const exampleEmbed = new MessageEmbed()
		.setColor('#6DE194')
		.setTitle('Placeholders')
		.setDescription('No download needed\n➱ %knc_kills%\n➱ %knc_deaths%\n➱ %knc_streak%\n➱ %knc_maxstreak%\n➱ %knc_kdr%\n➱ %knc_elo%\n➱ %knc_elorank%\n➱ %knc_elotag%\n➱ %knc_killeffect%\n➱ %knc_killsound%\n➱ %knc_trail%\n➱ %knc_block%\n➱ %knc_map%\n➱ %knc_maptimer%')
		.setAuthor({ name: 'KnockioFFA', iconURL: 'https://i.imgur.com/jiSUxRz.png', url: 'https://www.mc-market.org/resources/20068/' })
		.setTimestamp()
		.setFooter({ text: 'KnockiBot made by JustLeader#5532', iconURL: 'https://i.imgur.com/amZUuhG.png' });

		interaction.reply({ embeds: [exampleEmbed] });


	},
};
