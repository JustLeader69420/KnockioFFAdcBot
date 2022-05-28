const fs = require('node:fs');
const path = require('node:path');	
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = []
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}
/*
new SlashCommandBuilder().setName('ping').setDescription('Returns DiscordAPI and response latency'),
new SlashCommandBuilder().setName('permissions').setDescription('Returns a list of permissions you can set to allow/restrict certain functions of the plugin'),
new SlashCommandBuilder().setName('placeholders').setDescription('Returns a list of placeholders you can use in holograms and such'),
new SlashCommandBuilder().setName('commands').setDescription('Returns a list of the available commands'),
new SlashCommandBuilder().setName('skins').setDescription('Helps you customize the skins of the NPCs'),
new SlashCommandBuilder().setName('servers').setDescription('Returns a list of a few servers using the plugin to try the plugin out'),

*/
const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
