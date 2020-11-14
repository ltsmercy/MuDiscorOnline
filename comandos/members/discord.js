const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  
  let server = message.guild;

  const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField("ID", server.id, false)
    .addField("Region", server.region, false)
    .addField("Creado el", server.joinedAt.toDateString(), false)
    .addField(
      "Dueño del Servidor",
      `${server.owner}` + " (" + server.owner.user.id + ")",
      false
    )
    .addField("Miembros", server.memberCount, false)
    .addField("Roles", server.roles.cache.size, false)
	.addField('Booster',message.guild.premiumSubscriptionCount.toString())
	.addField("Bot",`${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setFooter(
      "Samplicio RolePlay 2020. Derechos Reservados",
      "https://i.imgur.com/3Oqs22P.gif"
    )
    .setTimestamp();

  message.channel.send(embed).then(m => m.delete({ timeout: 40000 }));
};
