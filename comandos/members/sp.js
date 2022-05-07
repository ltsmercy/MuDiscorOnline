const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  const embed = new Discord.MessageEmbed()
    .setAuthor("Mu Online Discord - Comunidad", "https://i.imgur.com/QslgD5I.gif")
    .addField("> Nuestra Website", "__**https://google.com//**__", false)
    .addField("> Nuestro Facebook", "__**https://www.facebook.com//**__", false)
    .addField("> Nuestro Instagram", "__**https://www.instagram.com//**__", false)
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );
  message.channel.send(embed).then(m => m.delete({ timeout: 20000 }));
};