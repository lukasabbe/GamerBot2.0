const Discord = require('discord.js');

module.exports = {
	name: "unlock",
	aliases: [],
	description: "Lås upp en kanal så att användare kan skriva i den.",
	usage: [],
	perms: ["adminCmd"],
	async do(message, args, profileData) {
		message.channel.updateOverwrite(message.guild.id, {
			SEND_MESSAGES: true,
		});

		message.channel.send("Denna kanal har nu blivit upplåst/meddelanden accepteras.");
	}
}