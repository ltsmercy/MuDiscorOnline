const Discord = require("discord.js");
const fs = require("fs");

module.exports = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message
      .reply("**Oops.** No tienes Permisos para usar este comando.")
      .then(m => m.delete({ timeout: 4000 }));
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1)
    return message
      .reply("**Oops.** Menciona un usuario para ver el total de warnings")
      .then(m => m.delete({ timeout: 4000 }));
  if (!user)
    return message
      .reply("**Oops.** No has mencionado a ningun usuario.")
      .then(m => m.delete({ timeout: 4000 }));
  if (!warns[user.tag])
    warns[user.tag] = {
      warns: 0
    };

  const embed = new Discord.MessageEmbed()
    .setAuthor("Mu Discord Online - Warning", "https://i.imgur.com/QslgD5I.gif")
    .setColor("RANDOM")
    .setThumbnail(!!user.user ? user.user.displayAvatarURL() : user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Mu Discord Online 2020. Derechos Reservados", "https://i.imgur.com/NuU3tGp.gif")
    .addField("> User:", `${user}`)
    .addField(
      "> Numero de advertencias:",
      warns[`${user.tag}, ${user.id}`].warns
    );
  message.channel.send({ embed }).then(m => m.delete({ timeout: 20000 }));
  user.send({ embed });
};

