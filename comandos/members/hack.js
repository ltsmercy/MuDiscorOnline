const Discord = require("discord.js");
const chance = require("chance").Chance();

module.exports = async (client, message, args) => {
  message.delete();
  let dominios = ["outlook.com", "gmail.com", "hotmail.com", "yahoo.com", "discordapp.com"];

  let usuario = message.mentions.users.first();
  if (!usuario)
    return message.channel
      .send("**Oops.** Debes mencionar a un usuario para hackearlo.")
      .then(m => m.delete({ timeout: 5000 }));
  let autor = message.author;

  let correos = dominios[Math.floor(Math.random() * dominios.length)];

  let ip = chance.ip();
  let numero = chance.phone({ country: "us", mobile: true });
  let correo = chance.email({ domain: correos });
 
  let contraseña = chance.word({ length: 8 });

  message.channel
    .send(
      new Discord.MessageEmbed()
        .setAuthor(
          `Hacking to ${usuario.tag}`,
          "https://i.imgur.com/ii2vcyc.gif"
        )
        .setColor("RANDOM")
    )
    .then(m => {
      const hackeo = new Discord.MessageEmbed()
        .setDescription(`Information to ${usuario}`)
        .addField("> Ip: ", ip)
        .addField("> Number: ", numero)
        .addField("> Email: ", correo)
        .addField("> Password: ", contraseña)
        .setColor("RANDOM")
        .setThumbnail("https://i.imgur.com/7ZRavak.gif")
        .setTimestamp()
        .setFooter(
          "Europe Origin 2. All Right Reserve.",
          "https://i.imgur.com/NuU3tGp.gif"
        );
      setTimeout(() => {
        m.edit(hackeo);
      }, 10000);
      m.delete({ timeout: 60000 });
    });
};
