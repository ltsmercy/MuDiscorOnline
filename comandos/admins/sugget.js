const Discord = require("discord.js");


module.exports = async (client, message, args) => {
  
  message.delete()

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No tienes los permisos suficientes para usar este comando.")

if(!args[0]) return message.channel.send("Elige una opción:\n`aceptar`\n`rechazar`")

let options = ["aceptar", "rechazar"];
  
  const aceptar = client.emojis.cache.get("769706761296150560");
  const denegar = client.emojis.cache.get("769706762872946689");

if(!options.includes(args[0].toLowerCase())) return message.channel.send("Esa opción es inválida, las opciones válidas son:\n`aceptar`\n`rechazar`")

if(args[0] === "aceptar") {
const MensajeID = args[1];

if(isNaN(MensajeID)) return message.channel.send("Brindame una ID válida");

let buscarMSG = await message.guild.channels.cache.get("715383439712321596").messages.fetch(MensajeID);

let razon = args.slice(2).join(" ");
if(!razon) return message.channel.send("Proporcióname una razón para aceptar esa sugerencia!")

buscarMSG.edit(`**Estado:** ${aceptar}\`Aceptada\` \n• Razón: `+razon+``)
}

if(args[0] === "rechazar") {
const MensajeID = args[1];

if(isNaN(MensajeID)) return message.channel.send("Brindame una ID válida");

let buscarMSG = await message.guild.channels.cache.get("715383439712321596").messages.fetch(MensajeID);

let razon = args.slice(2).join(" ");
if(!razon) return message.channel.send("Proporcióname una razón para rechazar esa sugerencia!")

buscarMSG.edit(`**Estado:** ${denegar}\`Rechazada\` \n• Razón: `+razon+``)
}
};
 