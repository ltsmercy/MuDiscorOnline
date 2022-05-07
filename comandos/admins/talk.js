module.exports = (client, message, args) => {
 message.delete()
  if (!message.member.hasPermission(["MANAGE_MESSAGES"]))
    return message
      .reply("No Tiene permiso para usar este comando.")
      .then(m => m.delete({ timeout: 5000 }));
       message.channel.startTyping();
        var saytext = args.join(" ");
        setTimeout(() => {
  message.channel.send(saytext);
  message.channel.stopTyping()
}, 3000);
};
