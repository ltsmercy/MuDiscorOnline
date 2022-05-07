const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  if (!message.member.hasPermission(["ADMINISTRATOR"]))
    return message
      .reply("No Tiene permiso para usar este comando.")
      .then(m => m.delete({ timeout: 2000 }));
   const saytext = args.slice(1).join(" ");	  
  const text = args.slice(0).join(" ");
  const embed = new Discord.MessageEmbed()
    .setAuthor(`Mowzie's Land - ${args[0]}`, `https://i.imgur.com/QslgD5I.gif`)
    .setColor("RANDOM")
    .setDescription(args.slice(1).join(" "))
    .setThumbnail("https://m.imgur.com/8j0p7Ki")
    .setTimestamp()
    .setFooter("Mowzie's Land -Al Right Reserve",
      "https://i.imgur.com/NuU3tGp.gif"
    );
  message.channel.send(embed);
};
