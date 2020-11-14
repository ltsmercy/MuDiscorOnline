const Discord = require("discord.js");
const fs = require("fs");

module.exports = (client, message, args) => {
  message.delete();

  var perms = message.member.hasPermission("ADMINISTRATOR");
  if (!perms)
    return message.channel
      .send("**Oops.** No tienes Permisos para usar este comando.")
      .then(m => m.delete({ timeout: 2000 }));

  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1)
    return message
      .reply("**Oops.** Menciona  aun usuario para borrar sus warnings.")
      .then(m => m.delete({ timeout: 4000 }));
  if (!user)
    return message
      .reply("**Oops.** No has mencionado a ningun usuario.")
      .then(m => m.delete({ timeout: 4000 }));
  if (!warns[`${user.tag}, ${user.id}`]) {
    warns[`${user.tag}, ${user.id}`] = {
      warns: 0
    };
  }
  let reason = `se ha borrado un total de __**${warns[`${user.tag}, ${user.id}`].warns}**__ warning. `;
  if (warns[`${user.tag}, ${user.id}`].warns > 0) {
    warns[`${user.tag}, ${user.id}`] = {
      warns: 0
    };
  } else {
    reason = "Este usuario no tiene advertencias.";
  }

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if (err) throw err;
  });

  const embed = new Discord.MessageEmbed()
    .setAuthor("Mu Discord Online - Warning", "https://i.imgur.com/QslgD5I.gif")
    .setColor("RANDOM")
    .setThumbnail(!!user.user ? user.user.displayAvatarURL() : user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Mu Discord Online 2020. Derechos Reservados", "https://i.imgur.com/NuU3tGp.gif")
    .addField("> Acción:", "Warnings Limpiado", false)
    .addField("> Usuario:", `${user}`, false)
    .addField("> Resultado:", reason, false);
  message.channel.send({ embed }).then(m => m.delete({ timeout: 20000 }));
  user.send({ embed });
};
