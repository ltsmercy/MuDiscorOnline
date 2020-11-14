const Discord = require("discord.js");

 module.exports = async (client, message, args) => {
   message.delete();

 const embed = new Discord.MessageEmbed()
     .setAuthor(message.author.username, message.author.displayAvatarURL())
     .setFooter("Mu Discord Online 2020. Derechos Reservados.", "https://i.imgur.com/NuU3tGp.gif")

 if (!message.member.permissions.has('MANAGE_MESSAGES')) {
     embed.setDescription('No puedes usar este comando.')
	 embed.setThumbnail("https://i.imgur.com/7ZRavak.gif")
     embed.setColor('RANDOM')
     return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

     
 if (!args[0]) {
     embed.setDescription('**Oops**. Debe mencionar a un usuario.')
	 embed.setThumbnail("https://i.imgur.com/7ZRavak.gif")
     embed.setColor('RANDOM')
     return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

 let member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0]) || await client.users.fetch(args[0])
 if (!member || member.id == message.author.id) {
     embed.setDescription('**Oops**. Debe mencionar a un usuario.')
	 embed.setThumbnail("https://i.imgur.com/7ZRavak.gif")
     embed.setColor('RANDOM')
     return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

 const razon = args.slice(1).join(" ");
 if (!razon) {
     embed.setDescription('**Escriba una razón de <@&770489938910642176>**')
	 embed.setThumbnail("https://i.imgur.com/7ZRavak.gif")
     embed.setColor('RANDOM')
     return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))

}

 if (message.guild.members.resolve(member.id)) { 
     if (message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
         embed.setDescription('No puedes <@&770489938910642176> a un usuario con mayor o igual nivel jerarquía que tú.')
         embed.setColor('RANDOM')
         return message.channel.send(embed).then(m => m.delete({ timeout: 5000 }))
}

 let role = message.guild.roles.cache.find(r => r.id === "770489938910642176");
 member.roles.add(role);
 embed
     
    .setAuthor("Mu Discord Online - Moderation", message.author.displayAvatarURL())
    .addField("> Usuario:", `${member.user}`)
    .addField("> Mod/Admin:", `${message.author}`)
    .addField("> Rol Agregado:", `${role}`)
    .addField('> Razón', razon)
    .setColor('RANDOM')
	.setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
    .setTimestamp()

 if (!member.user) await member.user.send(embed).catch(e => e);



let embeds = message.guild.channels.cache.find(
    c => c.id === "770489976198004756"
   );

   return embeds.send(embed).catch
   }
}