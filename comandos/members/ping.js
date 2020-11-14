const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  
  let ping = Math.floor(message.client.ping);
  setTimeout(() => {
    message.channel
      .send(
        new Discord.MessageEmbed()
          .setDescription(":ping_pong: Cargando..... ")
          .setColor("RANDOM")
      )
      .then(message => {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            `:speech_balloon: Ping Mensajes: \`${Date.now() -
              message.createdTimestamp}ms \`\n :satellite_orbital: Ping DiscordAPI: \`${Math.round(
              client.ws.ping
            )}ms\``
          )
          .setColor("RANDOM")
          .setTimestamp();

        setTimeout(() => {
          message.edit(embed);
        }, 5000);
        message.delete({ timeout: 20000 });
      });
  });
};
