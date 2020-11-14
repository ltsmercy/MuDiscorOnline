const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
   
 if(!message.member.roles.cache.has("770489938285559817"))
  if(message.channel.id !== "774314530703409173") return message
      .reply("No Tiene el rol requerido para usar este comando y no es el canal especificado <#774327693109362688>")
      .then(m => m.delete({ timeout: 5000 }));

 	  

  const text = args.slice(1).join(" ");
  const imagen = args[0];
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Mu Online Discord - Publicidad`, `https://i.imgur.com/QslgD5I.gif`)
    .setColor("RANDOM")
    .setDescription(text)
	.setImage(imagen)
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );
  message.channel.send(embed);
};
