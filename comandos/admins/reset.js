

module.exports = (client, message, args) => {
message.delete();

let id = ['218448894139301898'] //aca va su id, pueden agregar mas id's si quieren

if(!id.some(id => message.author.id == id)) { //si la ID del usuario que ejecuta el comando no esta cargada en la variable retorna con el embed

  const embed = new Discord.MessageEmbed() //creamos el embed
  .setDescription('Solo el developer del bot puede usar este comando.')
  .setColor("RED")
  return message.channel.send(embed) //lo enviamos
} //cerramos

message.channel.send('🕙 | Reinicio en progreso...').then(async msg => {
  msg.edit('🕙 | Reinicio en progreso...'); //edita el mensaje
  client.destroy(); //reiniciamos el bot
  await client.login("NzcwNDkwNTIzNjE4MTE1NTg2.X5eVNw.ImqIAdfgSQY0UzguCjqBztGpVPw"); //obtienen el token de su bot
  await msg.edit('🕙 | Reinicio en progreso...'); //edita el mensaje x2
  msg.edit(' ✅ | Reiniciado Correctamente!'); //edita el mensaje x3
});
}
