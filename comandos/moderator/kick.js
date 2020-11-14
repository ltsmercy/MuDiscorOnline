const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  message.delete();

const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setFooter("Mu Online Discord 2020. Derechos Reservados.", "https://i.imgur.com/NuU3tGp.gif")

    
if (!args[0]) {
    embed.setDescription('Debes que mencionar a un usuario.')
    embed.setColor('RANDOM')
    return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}


let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
if (!member || member.id == message.author.id) {
    embed.setDescription('Debes que mencionar a un usuario.') // 
    embed.setColor('RANDOM')
    return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

if (!message.member.permissions.has('KICK_MEMBERS')) {
    embed.setDescription('No puedes usar este comando.')
    embed.setColor('RANDOM')
    return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

if (message.guild.members.resolve(member.id)) { 
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        embed.setDescription('No puedes Kickear a un usuario con mayor o igual nivel jerarquía que tú.')
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
    if (!member.kickable) {
        embed.setDescription('No puedo Kickear a este usuario')
        embed.setColor('RANDOM')
        return message.channel.send(embed)
    }
}

let razon = args.slice(1).join(" ") ? args.slice(1).join(" ") : "Razon sin especificar"

message.guild.member(member).kick({ reason: razon })
embed
    
	.setAuthor("Mu Online Discord - Moderation", message.author.displayAvatarURL())
    .setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setDescription("Has sido Kickeado de __**Mu Online Discord**__.")
    .addField("> Usuario:", `${member.user}`)
	.addField("> Mod/Admin:", `${message.author}`)
    .addField('> Razón', razon)
    .setColor('RANDOM')
    .setTimestamp()

if (!member.user) await member.user.send(embed).catch(e => e);



let embeds = message.guild.channels.cache.find(
    c => c.id === "770489976198004756"
  );

  return embeds.send(embed).catch
}