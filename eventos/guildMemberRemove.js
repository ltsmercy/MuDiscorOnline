const Discord = require("discord.js");

module.exports = (client, member) => {
  const webhook = new Discord.WebhookClient(
    "771119095504437308",
    "ttD6LvSPIU7EByya504nXTY1V8EpobEhnzhIDQAOBU-QNfBEqvan_qdC9n6DsZMFz7v6"
  );
  const embed = new Discord.MessageEmbed()
    .setAuthor(`✨ ${member.user.tag}`, member.user.displayAvatarURL())
    .setDescription(`${member} ha salido de 
	__**Mu Online Discord**__`)
    .setThumbnail(member.user.displayAvatarURL());

  webhook.send(embed);
};
