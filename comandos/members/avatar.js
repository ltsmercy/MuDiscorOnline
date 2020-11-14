const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  
  const Discord = require("discord.js");
  let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    client.users.cache.find(x =>
      args ? x.tag === args.join(" ") : undefined
    ) ||
    message.author;

  const embed = new Discord.MessageEmbed()
    .setDescription(message.author == user ? `${user.tag}` : `${user.tag}`)
    .setImage(user.displayAvatarURL({ size: 1024 }))
    .setColor("RANDOM")
    .setFooter(
      "Mu Discord RolePlay 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );

  message.channel
    .send({ embed: embed })
    .then(m => m.delete({ timeout: 20000 }));
};
