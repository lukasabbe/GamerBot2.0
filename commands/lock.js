const Discord = require('discord.js');

module.exports = {
	name: "lock",
	aliases: [],
	description: "Lås en kanal så att den blir skrivskyddad.",
	usage: [],
	perms: ["adminCmd"],
	async do(message, args, profileData) {
		message.channel.updateOverwrite(message.guild.id, {
			SEND_MESSAGES: false,
		});

		message.channel.send("Denna kanal är nu låst/skrivskyddad.");
	}
}