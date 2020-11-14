const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  message.delete();

const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter(message.guild.name, "https://i.imgur.com/NuU3tGp.gif")

    
if (!args[0]) {
    embed.setDescription('Debes que mencionar a un usuario.')
    embed.setColor('RED')
    return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}


let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
if (!member || member.id == message.author.id) {
    embed.setDescription('Debes que mencionar a un usuario.') // 
    embed.setColor('RANDOM')
    return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

if (!message.member.permissions.has('BAN_MEMBERS')) {
    embed.setDescription('No puedes usar este comando.')
    embed.setColor('RANDOM')
    return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

if (message.guild.members.resolve(member.id)) { 
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes banear a un usuario con mayor o igual nivel jerarquía que tú.')
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
    if (!member.bannable) {
        embed.setDescription('No puedo banear a este usuario')
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
}

let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar"


    
	.setAuthor("Mu Online Discord - Moderation", message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setDescription("Has sido baneado de Mu Online Discord.")
    .addField("> Usuario:", `${member.user}`)
	.addField("> Mod/Admin:", `${message.author}`)
    .addField('> Razón', razon)
    .setColor('RANDOM')
    .setTimestamp()

if (!member.user) await member.user.send(embed).catch(e => e);

message.guild.members.ban(member.id, { reason: razon })
embed

let embeds = message.guild.channels.cache.find(
    c => c.id === "770489976198004756"
  );

  return embeds.send(embed).catch
}