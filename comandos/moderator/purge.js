const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  const user = message.mentions.users.first();
  if (!message.member.hasPermission("MANAGE_EMOJIS"))
    return message
      .reply("**Oops.** No tienes Permisos para usar este comando.")
      .then(m => m.delete({ timeout: 2000 }));
  const amount = !!parseInt(message.content.split(" ")[1])
    ? parseInt(message.content.split(" ")[1])
    : parseInt(message.content.split(" ")[2]);
  if (!amount)
    return message
      .reply("**Oops.** Debes mencionar una cantidad específica para borrar.")
      .then(m => m.delete({ timeout: 2000 }));
  if (!amount && !user)
    return message
      .reply(
        "**Oops.** Debes mencionar un usuario y cantidad de mensajes a borrar."
      )
      .then(m => m.delete({ timeout: 2000 }));
  message.channel.messages
    .fetch({
      limit: amount
    })
    .then(messages => {
      if (user) {
        const filterBy = user ? user.id : client.user.id;
        messages = messages
          .filter(m => m.author.id === filterBy)
          .array()
          .slice(0, amount);
      }

      message.channel
        .bulkDelete(messages)
        .catch(error => console.log(error.stack));
    });
};
