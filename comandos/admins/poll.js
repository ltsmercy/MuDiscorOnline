const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  
  let perms = message.member.hasPermission("ADMINISTRATOR");
  if (!perms)
    return message.channel
      .send("**Oops.** No tienes Permisos para usar este comando.")
      .then(m => m.delete({ timeout: 4000 }));

  let suggestion = args.slice(0).join(" ");
  if (!suggestion)
    return message.channel
      .send(`Tienes que poner una encuesta que enviar.`)
      .then(m => m.delete({ timeout: 4000 }));
  let embedSugerencia = new Discord.MessageEmbed()
    .setAuthor("Europe Mu Origin - POLL Started", "https://i.imgur.com/QslgD5I.gif")
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Europe MU Origin 2022. ALL RIGHT RESERVED", "https://i.imgur.com/NuU3tGp.gif"
    )
    .addField(
      `Poll Ready:`,
      `${suggestion}\n
***__¡Vote!__***`
    )
    .setColor("RANDOM");
  message.channel.send(embedSugerencia).then(async msg => {
    await msg.react("771218886447333399");
    await msg.react("771218889919954974");
  });
};
