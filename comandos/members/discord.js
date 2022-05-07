const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  
  let server = message.guild;

  const embed = new Discord.MessageEmbed()
    .setThumbnail(server.iconURL())
    .setAuthor(server.name, server.iconURL())
    .addField("ID", server.id, false)
    .addField("Region", server.region, false)
    .addField("Created the", server.joinedAt.toDateString(), false)
    .addField(
      "Server Owner",
      `${server.owner}` + " (" + server.owner.user.id + ")",
      false
    )
    .addField("Members", server.memberCount, false)
    .addField("Roles", server.roles.cache.size, false)
	.addField('Boost',message.guild.premiumSubscriptionCount.toString())
	.addField("Bot",`${message.guild.members.cache.filter(m => m.user.bot).size}`)
    .setColor("RANDOM")
    .setFooter(
      "Europe Origin 2. All Right Reserve",
      "https://i.imgur.com/3Oqs22P.gif"
    )
    .setTimestamp();

  message.channel.send(embed).then(m => m.delete({ timeout: 40000 }));
};
