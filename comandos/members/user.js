const Discord = require("discord.js");

module.exports = (client, message, args) => {
  message.delete();
  if (message.channel.id !== "710657466475741265")
    return message
      .reply(
        "**Opps.** Solo puedes usar este comando en <#710657466475741265>."
      )
      .then(m => m.delete({ timeout: 4000 }));

  const online = client.emojis.cache.get("771218885936283670");
  const offline = client.emojis.cache.get("771218885440700436");
  const idle = client.emojis.cache.get("771218879766200340");
  const dnd = client.emojis.cache.get("771218878340005919");
  const stream = client.emojis.cache.get("771218881355579393");

  let estados = {
    online: `${online} Conectado.`,

    offline: `${offline} Desconectado.`,

    idle: `${idle} Ausente.`,

    dnd: `${dnd} No molestar.`,

    stream: `${stream} trasmitiendo en vivo.`
  };

  let usuario = message.mentions.members.first() || message.member;

  let embed = new Discord.MessageEmbed();
  embed.setColor("RANDOM");
  embed.setAuthor(`${usuario.user.tag}`, `${usuario.user.displayAvatarURL()}`);
  embed.setThumbnail(usuario.user.displayAvatarURL());
  embed.addField("Apodo", `${usuario.displayName}`);
  embed.addField("ID", `${usuario.id}`);
  embed.addField(
    "Jugando a",
    usuario.presence.game != null ? usuario.presence.game.name : "Nada",
    false
  );
  embed.addField("Estado", `${estados[usuario.presence.status]}`);
  embed.addField(
    "Cuenta Creada",
    `${usuario.user.createdAt.toDateString()}`,
    false
  );
  embed.addField("Fecha de Ingreso", message.member.joinedAt.toDateString());
  embed.addField("Roles", `${usuario.roles.cache.map(m => m).join("** | **")}`);
  embed.addField(
    "**Cantidad de roles:**",
    `${message.guild.member(usuario).roles.cache.size}`,
    false
  );
  embed.setFooter(
    "Mu Online Discord 2020. Derechos Reservados",
    "https://i.imgur.com/NuU3tGp.gif"
  );
  embed.setTimestamp();

  return message.channel.send(embed).then(m => m.delete({ timeout: 50000 }));
};
