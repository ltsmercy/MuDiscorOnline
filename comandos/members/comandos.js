const Discord = require("discord.js");

module.exports = async (client, message, args) => {
  
  
  let author = message.author;
  let categorias = [];
  let pagina = 1;

  let pagina1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Mu Online Discord Comandos", "https://i.imgur.com/QslgD5I.gif")
    .setDescription(`${message.author}. **Comandos Usuarios - 1/3**.`)
    .addField(
      "!user @mention",
      "Ver información de del usuario mencionado o mi propia información.",
      false
    )
    .addField(
      "!avatar @mention",
      "Ver el avatar de un usuario o mi propio avatar.",
      false
    )
    .addField(
      "!discord",
      "Información del servidor y su respectivo dueño.",
      false
    )
    .addField("!social", "Muestra el URL de nuestra redes sociales.", false)
    .addField("!ping", "Muestra tu ping con la conexión a discord.", false)
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );

  let pagina2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Mu Online Discord Comandos", "https://i.imgur.com/QslgD5I.gif")
    .setDescription(`${message.author}. **Comandos RANDOM - 2/3**.`)
    .addField(
      "!hack @mention",
      "Menciona a un usuario para ver información de su cuenta.",
      false
    )
    .setThumbnail("https://i.imgur.com/7ZRavak.gif")
    .setTimestamp()
    .setFooter(
      "Mu Online Discord 2020. Derechos Reservados",
      "https://i.imgur.com/NuU3tGp.gif"
    );


  let pagina3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor("Mu Online Discord Comandos", "https://i.imgur.com/QslgD5I.gif")
    .setDescription(`${message.author}. **Comandos Sorporte - 3/3**.`)
    .addField(
      "!sugerencia [texto]",
      "Escribe tu sugerencia no mas de __**1024 caracteres**__.",
      false
    )
    .addField(
      "!report @mention [razón]",
      "Escribe tu reporte hacia un usuario con mal comportamiento.",
      false
    )
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

  const atras = msg.createReactionCollector(atrasF, { idle: 60000 });
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
