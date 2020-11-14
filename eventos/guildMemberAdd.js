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
      " Bienvenido " + member.guild.name,
      "https://i.imgur.com/QslgD5I.gif"
    )
    .setDescription(
      `Hey ${member}, Bienvenid@ a la comunidad **Mu Online Discord**. Puedes revisar nuestros canales <#770489978169982996> y <#770489978760855562>. 

     __**Recuerda no ser TOXICO.**__.`
    )
    .setFooter(
      "Mu Online Dsicord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    )
    .setThumbnail(member.user.displayAvatarURL())
    .setImage('https://i.imgur.com/0GPUT0d.gif')
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
    if (años > 0) final += años > 1 ? `${años} años, ` : `${años} año, `;
    if (meses > 0) final += meses > 1 ? `${meses} meses, ` : `${meses} mes, `;
    if (dias > 0) final += dias > 1 ? `${dias} dias, ` : `${dias} dia, `;
    if (horas > 0) final += horas > 1 ? `${horas} horas, ` : `${horas} hora, `;
    if (minutos > 0)
      final += minutos > 1 ? `${minutos} minutos y ` : `${minutos} minuto y `;
    if (segundos > 0)
      final += segundos > 1 ? `${segundos} segundos.` : `${segundos} segundo.`;
    return final;
  }

  const embed2 = new Discord.MessageEmbed()
    .setAuthor(`✨ ${member.user.tag}`, member.user.displayAvatarURL())
    .setDescription(`${member} ha ingresado a __**Mu Online Discord**__`)
    .setThumbnail(member.user.displayAvatarURL())
    .addField(
      "Fecha de registro",
      `${moment(member.user.createdTimestamp).format("LL")}`)
    .addField(
      "Tiempo de registro",
      T_convertor(Math.floor(Date.now()) - member.user.createdTimestamp)
    )
	.setColor("RANDOM");

  webhooks.send(embed2);
};
