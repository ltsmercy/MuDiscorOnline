const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  if (message.channel.id !== "770489985140260874")
    return message
      .reply("**Opps.** Solo puedes usar este comando en <#770489985140260874>")
      .then(m => m.delete({ timeout: 5000 }));
  
  let rUser = message.mentions.users.first();
  
  if (!rUser)
    return message.channel
      .send("**Oops.** No has mencionado un usuario para reportar")
      .then(m => m.delete({ timeout: 5000 }));
  
  let reason = args.slice(1).join(" ");
  
  let reportEmbed = new Discord.MessageEmbed()
    .setAuthor("Mu Online Discord - Report", "https://i.imgur.com/QslgD5I.gif")
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    )
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
    .addField("> Reportante", `${message.author}`)
    .addField("> Reportado", `${rUser}`)
    .addField("> Razón del Reporte", reason);
  

  let reportsChannel = message.guild.channels.cache.find(
    c => c.id === "770489985789984768"
  );
  

  return reportsChannel.send(reportEmbed);
};
