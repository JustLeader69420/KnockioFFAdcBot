const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servers')
		.setDescription('Returns a list of a few servers using the plugin to try the plugin out'),
	async execute(interaction) {
				
		
		// https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor
		const exampleEmbed = new MessageEmbed()
		.setColor('#5ACFF5')
		.setTitle('Servers')
		.setDescription('**The official KnockioFFA MC server:**\n➱ knockioffa.justleader.eu\n\n**Other servers using this plugin:**\n➱ mc.voxcraft.us\n➱ play.nzcraft.net\n➱ mc.novasurvival.it\n➱ play.vencagames.cz\n➱ mc.uranocraft.net\n➱ mc.mushroomnet.it')
		.setAuthor({ name: 'KnockioFFA', iconURL: 'https://i.imgur.com/jiSUxRz.png', url: 'https://www.mc-market.org/resources/20068/' })
		.setFooter({ text: 'KnockiBot made by JustLeader#5532', iconURL: 'https://i.imgur.com/amZUuhG.png' });

		interaction.reply({ embeds: [exampleEmbed] });


	},
};
