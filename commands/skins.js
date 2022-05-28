const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skins')
		.setDescription('Helps you customize the skins of the NPCs'),
	async execute(interaction) {
		
		
		// https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
		const exampleEmbed = new MessageEmbed()
		.setColor('#5ACFF5')
		.setTitle('Skins')
		.setDescription('**Customize your NPC settings menu skin!**\n➱ Go to MineSkin\n➱ Choose the skin you want\n➱ Click on it, and copy the code\nthat is in "Direct Link" after https://minesk.in/\n➱ Insert in into config.yml under the MineSkin function\n➱ Restart the server, and you are done!')
		.setAuthor({ name: 'KnockioFFA', iconURL: 'https://i.imgur.com/jiSUxRz.png', url: 'https://www.mc-market.org/resources/20068/' })
		.setTimestamp()
		.setFooter({ text: 'KnockiBot made by JustLeader#5532', iconURL: 'https://i.imgur.com/amZUuhG.png' });

		interaction.reply({ embeds: [exampleEmbed] });


	},
};
