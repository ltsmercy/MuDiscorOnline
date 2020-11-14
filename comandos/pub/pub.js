const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  if(message.channel.id !== "774314530703409173") return message
      .reply("**Opps.** Solo puedes usar este comando en <#774314530703409173>")
      .then(m => m.delete({ timeout: 5000 }));

  const text = args.slice(0).join(" ");
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Mu Online Discord - Publicidad`, `https://i.imgur.com/QslgD5I.gif`)
    .setColor("RANDOM")
    .setDescription(text)
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );
  message.channel.send(embed);
};
