const Discord = require("discord.js");

module.exports = async (client, message, args) => {

  let perms = message.member.hasPermission("KICK_MEMBERS");
  if (!perms)
    return message.channel
      .send(`${message.author}, **Oops.** No tienes Permisos para usar este comando.`)
      .then(m => m.delete({ timeout: 5000 }));
  
  
  let author = message.author;
  let categorias = [];
  let pagina = 1;

  let pagina1 = new Discord.MessageEmbed()
    .setAuthor('**Mu Onlind Discord | Ayudantes**', "https://i.imgur.com/QslgD5I.gif")
    .setDescription('__**Comandos Ayudante**__')
	.addField("Muy Pronto", "Comandos para Ayudantes", true)
	.setThumbnail("https://i.imgur.com/7ZRavak.gif")
	.setColor("RANDOM")
	.setTimestamp()
	.setFooter("Mu Discord Online 2020. Derechos Reservados", "https://i.imgur.com/NuU3tGp.gif"
    );
	

  let pagina2 = new Discord.MessageEmbed()
    .setAuthor('**Mu Discord Online | Moderador**', "https://i.imgur.com/QslgD5I.gif")
    .setDescription('__**Comandos Moderador**__')
	.addField("!purge",".purge @mencion @cantidad(max 99 mensaje) o !purge @cantidad (max 99 mensaje)",false)
	.addField("!mute",".mute @mencion", false)
    .addField("!tempmute", ".tempmute @mencion tiempo(ej: 1 segundo > 1s, 1 minuto > 1m y 1 hora > 1h)", false)
	.addField("!unmute", ".unmute @mencion", false)
	.addField("!kick", ".kick @mencion @razón", false)
	.setThumbnail("https://i.imgur.com/7ZRavak.gif")
	.setColor("RANDOM")
	.setTimestamp()
	.setFooter("Mu Discord Online 2020. Derechos Reservados", "https://i.imgur.com/NuU3tGp.gif"
    );


  let pagina3 = new Discord.MessageEmbed()
    .setAuthor("Mu Discord Online - Administrador", "https://i.imgur.com/QslgD5I.gif")
	.addField("!say", ".say @mensaje", false)
	.addField("!send", ".send @mencion @mensaje (envia un msj al usuario al privado)", false)
	.addField("!talk",".talk @mesaje (este cmd envia un msj como si fuera el bot escribiendo)")
	.addField("!poll", ".poll @mensaje (este cmd es para realizar encuestas)", false)
	.addField("!ban",".ban @mencion @razón", false)
    .addField("!sugget", "[Explicacion Aquí](https://imgur.com/a/nRLyEin)", true)
	.setColor("RANDOM")
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );

  const paginas = [pagina1, pagina2, pagina3];

  let msg = await message.channel.send(pagina1);
  await msg.react("⏪");
  await msg.react("🔻");
  await msg.react("💥");
  await msg.react("🔺");
  await msg.react("⏩");

  const atrasF = (reaction, user) => {
    return reaction.emoji.name === "🔻" && user.id === message.author.id;
  };
  const proximoF = (reaction, user) => {
    return reaction.emoji.name === "🔺" && user.id === message.author.id;
  };
  const inicioF = (reaction, user) => {
    return reaction.emoji.name === "⏪" && user.id === message.author.id;
  };
  const finF = (reaction, user) => {
    return reaction.emoji.name === "⏩" && user.id === message.author.id;
  };

  const atras = msg.createReactionCollector(atrasF, { idle: 120000 });
  const proximo = msg.createReactionCollector(proximoF);
  const inicio = msg.createReactionCollector(inicioF);
  const fin = msg.createReactionCollector(finF);

  atras.on("collect", async function(r) {
    if (pagina === 1)
      return await r.users.remove(
        r.users.cache.filter(u => u === message.author).first()
      );
    pagina--;
    await msg.edit(paginas[pagina - 1]);
    await r.users.remove(
      r.users.cache.filter(u => u === message.author).first()
    );
  });

  proximo.on("collect", async function(r) {
    if (pagina === paginas.length) return await r.users.remove(message.author);
    pagina++;
    await msg.edit(paginas[pagina - 1]);
    await r.users.remove(
      r.users.cache.filter(u => u === message.author).first()
    );
  });

  inicio.on("collect", async function(r) {
    pagina = 1;
    await msg.edit(pagina1);
    await r.users.remove(
      r.users.cache.filter(u => u === message.author).first()
    );
  });

  fin.on("collect", async function(r) {
    pagina = categorias.length;
    await msg.edit(pagina3);
    await r.users.remove(
      r.users.cache.filter(u => u === message.author).first()
    );
  });

  atras.on("end", r => {
    return msg.delete();
  });
};