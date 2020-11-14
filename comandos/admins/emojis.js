const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  
 let perms = message.member.hasPermission("KICK_MEMBERS");
  if (!perms)
    return message.channel
      .send(`${message.author}, **Oops.** No tienes Permisos para usar este comando.`)
      .then(m => m.delete({ timeout: 5000 }));

  const emojiList = message.guild.emojis.cache.map((e) => (e) + '   |   ' + e.name).join('\n\n');
        for(let i = 0; i < emojiList.length; i += 2000) {
          const splitList = emojiList.substring(i, Math.min(emojiList.length, i + 2000));
          const embed = new Discord.MessageEmbed()
            .setTitle('Emojis del server.', message.guild.name)
            .setColor('RANDOM')
            .setDescription(splitList);
          message.channel.send({embed});
      }
    }