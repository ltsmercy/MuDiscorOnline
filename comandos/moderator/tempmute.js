const Discord = require("discord.js");
const ms = require("ms");

module.exports = async (client, message, args) => {
  message.delete();


    if(message.member.hasPermission('MANAGE_MESSAGES')) {
            let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!member) return message.reply("**Oops**. Debe mencionar a un usuario para <@&770489938910642176>").then(m => m.delete({ timeout: 5000 }));
            let mainrole = message.guild.roles.cache.find(role => role.id === "770489938910642176");
            let role = message.guild.roles.cache.find(role => role.id === "770489938910642176");

            if (!role) return message.reply("Rol no encontrado.").then(m => m.delete({ timeout: 5000 }));

            let time = args[1];
            if (!time) {
                return message.reply("No especificaste el tiempo | Formato: (1s (Segundo) | (1m (Minuto)) | 1h (Hora) / 1d (Dia))").then(m => m.delete({ timeout: 5000 }));
            }

			const razon = args.slice(2).join(" ");
			if(!razon) return message.reply("**Oops**. Escriba una razón de <@&770489938910642176>").then(m => m.delete({ timeout: 5000 }));
	
	let hight = message.mentions.members.first() || 
            message.guild.members.resolve(args[0])
    if (!hight.roles.highest.comparePositionTo(member.roles.highest) >= 0) return message.reply("No puedes advertir a un usuario con mayor o igual nivel jerarquía que tú.").then(m => m.delete({ timeout: 5000 })); 		

            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

			const mute = new Discord.MessageEmbed()
             .setAuthor("Mu Discord Online - Moderation", message.author.displayAvatarURL())
            .setDescription(`El Usuario ha sido **<@&770489938910642176>**`)
	        .addField("> Usuario:", `${member}`)
	        .addField("> Mod/Admin", `${message.author}`)
			.addField("> Razón", `${razon}`)
            .addField("> Tiempo", `${ms(ms(time))}`)
		    .setColor("RANDOM")
            .setTimestamp()
			.setThumbnail(!!member.user ? member.user.displayAvatarURL() : member.displayAvatarURL())
            .setFooter("MU Discord Online 2020. Derechos Reservados", "https://i.imgur.com/NuU3tGp.gif");

			client.channels.resolve("770489976198004756").send(mute)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
            }, ms(time));

        } else {
            return message.channel.send("**Oops.** No tienes Permisos para usar este comando.").then(m => m.delete({ timeout: 5000 }));
        }
    }