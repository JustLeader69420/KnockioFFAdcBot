const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('permissions')
		.setDescription('Returns a list of plugin permissions you can set to allow/restrict certain functions of the plugin'),
	async execute(interaction) {

		
		// https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
		const exampleEmbed = new MessageEmbed()
		.setColor('#5ACFF5')
		.setTitle('Permissions')
		.setDescription('➱ knc.admin\n➱ knc.admin.forcemap\n➱ knc.joinmessage.bypass\n➱ knc.trail.*\n➱ knc.trail.<trail>\n➱ knc.killsound.*\n➱ knc.killsound.<killsound>\n➱ knc.killeffect.*\n➱ knc.killeffect.<killeffect>\n➱ knc.block.*\n➱ knc.block.<block animation>\n➱ knc.skipmap')
		.setAuthor({ name: 'KnockioFFA', iconURL: 'https://i.imgur.com/jiSUxRz.png', url: 'https://www.mc-market.org/resources/20068/' })
		.setFooter({ text: 'KnockiBot made by JustLeader#5532', iconURL: 'https://i.imgur.com/amZUuhG.png' });

		interaction.reply({ embeds: [exampleEmbed] });


	},
};
