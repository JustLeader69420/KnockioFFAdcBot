const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Returns a list of the available plugin commands'),
	async execute(interaction) {


		// https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
		const exampleEmbed = new MessageEmbed()
		.setColor('#FFD74E')
		.setTitle('Commands')
		.setDescription('**Player commands:**\n➱ /knc join\n➱ /knc leave\n➱ /knc settings\n➱ /knc skipmap\n\n**Staff commands:**\n➱ /knc forcemap\n➱ /knc setlobby\n➱ /knc setleave\n➱ /knc tool\n➱ /knc maps\n➱ /knc createmap <name>\n➱ /knc deletemap <name>\n➱ /knc setnpc <name>\n➱ /knc removenpc <name>\n➱ /knc npcs\n➱ /knc reload')
		.setAuthor({ name: 'KnockioFFA', iconURL: 'https://i.imgur.com/jiSUxRz.png', url: 'https://www.mc-market.org/resources/20068/' })
		.setFooter({ text: 'KnockiBot made by JustLeader#5532', iconURL: 'https://i.imgur.com/amZUuhG.png' });

		interaction.reply({ embeds: [exampleEmbed] });


	},
};
