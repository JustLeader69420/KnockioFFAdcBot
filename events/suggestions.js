const { suggestion_channel_id } = require('../config.json');

module.exports = {
	name: 'messageCreate',
	execute(message) {
		if(message.channel == suggestion_channel_id){
            let timestamp = Date.now();
            console.log(Math.floor(timestamp/1000) + " | Adding suggestions channel reactions onto message with ID " + message.id + "in the configured suggestions channel.")
            try {
            message.react('accept:845429993701244989');
            message.react('deny:842180487903707176');
            }catch (error){
                let timestamp = Date.now();
                console.log(Math.floor(timestamp/1000) + " | Failed at adding suggestions to message with ID " + message.id + " in the configured suggestions channel.")
                console.error(error);
            }
        }
	},
};