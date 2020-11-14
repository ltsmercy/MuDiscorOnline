const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports = async (client, message, args) => {
  message.delete();
  let user = message.mentions.users.first();
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("**Oops.** No tienes Permisos para usar este comando.").then(m => m.delete({ timeout: 5000 }));
  const hight = message.member.roles.highest.comparePositionTo(member.roles.highest) >= 0
	if (!hight) return message.channel.send("No puedes Sancionar un usuario con mayor o igual nivel jerarquía que tú.").then(m => m.delete({ timeout: 5000 }));
   if(!user) return message.reply("**Oops**. Debe mencionar a un usuario.").then(m => m.delete({ timeout: 5000 }));
  const razon = args.slice(1).join(" ");
	if(!razon) return message.reply("**Oops**. Escriba una razón").then(m => m.delete({ timeout: 5000 }));

  if (!warns[`${user.tag}, ${user.id}`])
    warns[`${user.tag}, ${user.id}`] = {
      warns: 0
    };

  warns[`${user.tag}, ${user.id}`].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if (err) throw err;
  });

  const embed = new Discord.MessageEmbed()
    .setAuthor("Mu Discord Online - Warning", "https://i.imgur.com/QslgD5I.gif")
    .setDescription("Has sido advertido de Venice Palm RolePlay.")
    .addField("> Usuario:", `${user}`)
    .addField("> Mod/Admin:", `${message.author}`)
    .addField("> Numero de warning:", warns[`${user.tag}, ${user.id}`].warns)
    .addField("> Razón", `${razon}`)
	.setColor("RANDOM")
    .setThumbnail(!!user.user ? user.user.displayAvatarURL() : user.displayAvatarURL())
    .setTimestamp()
    .setFooter("Mu Discord Online 2020. Derechos Reservados", "https://i.imgur.com/NuU3tGp.gif");
  let logchannel = message.guild.channels.cache.find(
    c => c.id === "770489976198004756"
  );
  if (!logchannel) {
  } else {
    client.channels.cache.get(logchannel.id).send({ embed });
  }
  if (user.bot) return;
  message.mentions.users
    .first()
    .send({ embed })
    .catch(e => {
      if (e) return;
    });

  if (warns[`${user.tag}, ${message.guild.id}`].warns == 2) {
    let muteRole = message.guild.roles.cache.find(
      r => r.id === "770489938910642176"
    );

    let mutetime = "10m";
    message.guild.members.cache.get(user.id).roles.add(muteRole.id);

    setTimeout(function() {
      message.guild.members.cache.get(user.id).roles.remove(muteRole.id);
    }, ms(mutetime));
  }

  if (warns[`${user.tag}, ${message.guild.id}`].warns == 4) {
    let muteRole = message.guild.roles.cache.find(
      r => r.id === "770489938910642176"
    );

    let mutetime = "30m";
    message.guild.members.cache.get(user.id).roles.add(muteRole.id);

    setTimeout(function() {
      message.guild.members.cache.get(user.id).roles.remove(muteRole.id);
    }, ms(mutetime));
  }

  if (warns[`${user.tag}, ${message.guild.id}`].warns == 7) {
    let muteRole = message.guild.roles.cache.find(
      r => r.id === "770489938910642176"
    );

    let mutetime = "60m";
    message.guild.members.cache.get(user.id).roles.add(muteRole.id);

    setTimeout(function() {
      message.guild.members.cache.get(user.id).roles.remove(muteRole.id);
    }, ms(mutetime));
  }

  if (warns[`${user.tag}, ${message.guild.id}`].warns == 10) {
    message.guild.member(user).kick(reason);
  }

  if (warns[`${user.tag}, ${message.guild.id}`].warns == 13) {
    message.guild.member(user).kick(reason);
  }

  if (warns[`${user.tag}, ${message.guild.id}`].warns == 15) {
    message.guild.member(user).ban(reason);
  }
};
