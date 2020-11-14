const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  let member = message.mentions.members.first();
  const razon = args.slice(1).join(" ");
  var perms = message.member.hasPermission("KICK_MEMBERS");
  if (!perms)
    return message.channel
      .send("**Oops.** No tienes Permisos para usar este comando.")
      .then(m => m.delete({ timeout: 5000 }));
  let role = message.guild.roles.cache.find(r => r.id === "770489938910642176");
  if (message.mentions.users.size < 1)
    return message
      .reply("**Oops**. Debe mencionar a un usuario para Desmutear.")
      .then(m => m.delete({ timeout: 5000 }));
  if (!role)
    return message.channel
      .send("Rol no encontrado en el servidor.")
      .then(m => m.delete({ timeout: 5000 }));
  member.roles.remove(role);

  const embed = new Discord.MessageEmbed()
    .setAuthor("Mu Online Discord - Moderation", message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setDescription("El Usuario ha sido __**Des**__<@&770489938910642176>")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    )
    .addField("> Usuario:", `${member}`)
    .addField("> Mod/Admin:", `${message.author}`)
    .addField("> Rol Quitado:", `${role}`)
    .setColor("RANDOM");

  let embeds = message.guild.channels.cache.find(
    c => c.id === "770489976198004756"
  );

  member.send(embed);

  return embeds.send(embed);
};
