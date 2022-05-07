//cada que necesitemos una libreria o exportar algo
//lo pondremos fuera del module.exports
const config = require("../config.json");
const Discord = require("discord.js")


module.exports = (client, message) => {
  //Evitar que mi bot responda a otros bots, incluyendose
  if (message.author.bot) return;
  //Evitar que mi bot responda a otros bots, incluyendose
if (message.channel.type === "dm") {

   const embed = new Discord.MessageEmbed()
      .setTimestamp()
      .setTitle(`✉ - Private message`)
      .addField(`Sent by:`, `${message.author} (${message.author.id})`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL())
      .addField(`Message: `, message.content)
      .setFooter(`Europe Origin 2`)
	  .setTimestamp();

 client.channels.cache.get("771203391421939752").send(embed);
}


  //Evitar que mi bot responda a otros bots, incluyendose
  if (message.author.bot) return;

  if (!message.content.startsWith(config.prefix)) return;

  //separamos el mensaje por cada espacio para poder manejar cada argumento
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

  //el primer argumento de nuestro mensaje es el nombre de nuestro comando
  const command = args.shift().toLowerCase();
  
  //aqui buscamos si el comando existe
  let cmd = client.comandos.get(command);
  //si no, pos no responde
  if (!cmd) return;
  //y al final lo ejecutamos
  //estos 3 parámetros estarán presente en cada uno de tus comandos
  cmd(client, message, args);
};