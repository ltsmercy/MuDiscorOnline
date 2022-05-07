const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  let permisos = message.member.hasPermission("ADMINISTRATOR");
  if (!permisos) return message.reply("No tienes permisos");
  const mencionado = message.mentions.users.first() || message.author;
  if (!mencionado) return message.reply("No ha mencionando a ningún miembro.");
  let id = mencionado.id;
  let texto = args.slice(1).join(" ");
  if (!texto) return message.channel.send(`${message.author}, Escriba el mensaje a enviar.`).then(m => m.delete({ timeout: 4000 }));
  client.users.resolve(id).send(texto);
};
