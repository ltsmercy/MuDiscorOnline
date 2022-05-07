const Discord = require("discord.js");
const moment = require("moment");

module.exports = (client, member) => {


const webhook = new Discord.WebhookClient(
    "771105947405647893",
    "YkiJBEwchtlmWrUPZ-VdxHMHwNzWaYvl8YrvMoKeoZNaynFtUmgDccgYMg2ER8arSwcG"
  );
  
  const webhooks = new Discord.WebhookClient(
    "771106171107934232",
    "FEIz0xOju_e9HBU9tQWzQHMTXTziFCCcctDSh9zTVxJxkRM3GlErPM1YrZoThrn1hZnK"
  );
  const role = member.guild.roles.cache.find(
    r => r.id === "770489940231847946"
  );
  member.roles.add(role);

  
  let embed = new Discord.MessageEmbed()
    .setAuthor(
      " Welcome to " + member.guild.name,
      "https://i.imgur.com/QslgD5I.gif"
    )
    .setDescription(
      `hey ${member}, Welcome to the **Europe Origin 2** community. You can check our channels
 <#770489978169982996>
 and <#774374358285549568>.


 __ ** Remember not to be TOXIC. ** __`
    )
    .setFooter(
      "Europe Origin 2. All Right Reserved",
      "https://i.imgur.com/NuU3tGp.gif"
    )
    .setThumbnail(member.user.displayAvatarURL())
    .setImage('')
    .setTimestamp ()
    .setColor("RANDOM");
  webhook.send(embed);
  

  function T_convertor(ms) {
    let años = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
    let meses = Math.floor(
      (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    let dias = Math.floor(
      (ms % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
    let horas = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((ms % (1000 * 60)) / 1000);

    let final = "";
    if (años > 0) final += años > 1 ? `${años} years, ` : `${años} year, `;
    if (meses > 0) final += meses > 1 ? `${meses} mounths, ` : `${meses} mounth, `;
    if (dias > 0) final += dias > 1 ? `${dias} days, ` : `${dias} day, `;
    if (horas > 0) final += horas > 1 ? `${horas} hours, ` : `${horas} hour, `;
    if (minutos > 0)
      final += minutos > 1 ? `${minutos} minutes and ` : `${minutos} minute and `;
    if (segundos > 0)
      final += segundos > 1 ? `${segundos} seconds.` : `${segundos} second.`;
    return final;
  }

  const embed2 = new Discord.MessageEmbed()
    .setAuthor(`✨ ${member.user.tag}`, member.user.displayAvatarURL())
    .setDescription(`${member} you have entered __**Europe Origin 2**__`)
    .setThumbnail(member.user.displayAvatarURL())
    .addField(
      "Registration date",
      `${moment(member.user.createdTimestamp).format("LL")}`)
    .addField(
      "Registration time",
      T_convertor(Math.floor(Date.now()) - member.user.createdTimestamp)
    )
	.setColor("RANDOM");

  webhooks.send(embed2);
};
