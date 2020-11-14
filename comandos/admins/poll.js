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
    .setAuthor("Mu Online Discord - Encuesta", "https://i.imgur.com/QslgD5I.gif")
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    )
    .addField(
      `Encuesta:`,
      `${suggestion}\n
***__¡Vota!__***`
    )
    .setColor("RANDOM");
  message.channel.send(embedSugerencia).then(async msg => {
    await msg.react("718521906420252735");
    await msg.react("718521906491293756");
  });
};
