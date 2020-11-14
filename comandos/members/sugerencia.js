const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  message.delete();
  if (message.channel.id !== "710921045250670643") return message
      .reply("**Opps.** Solo puedes usar este comando en <#710921045250670643>")
      .then(m => m.delete({ timeout: 4000 }));

  let sug = args.slice(0).join(" ");
  if (!sug) return message.channel.send(`Tienes que poner una sugerencia que enviar.`)
      .then(m => m.delete({ timeout: 4000 }));
  
   const waiting = client.emojis.cache.get("771218877429841941");
 
  let sugEmbed = new Discord.MessageEmbed()
      .setAuthor("Mu Online Discord - Sugerencia", "https://i.imgur.com/QslgD5I.gif")
    .setColor("RANDOM")
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    )
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .addField("> Autor", `${message.author}`)
    .addField("> Sugerencia", sug);
    
  const canal = message.guild.channels.cache.get("770489987103719424")
  return canal.send(sugEmbed).then(async msg => {
    await msg.react("771218881389658142");
    await msg.react("771218881393983518");
    await canal.send(`**Estado:** ${waiting}\`Pendiente\``)
  });
};
 