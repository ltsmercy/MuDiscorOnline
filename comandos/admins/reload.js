module.exports = (client, message, args) => {
  
  if (message.author.id != 218448894139301898) return message.channel.send(`**Opps.** no pueede usar este comando.`)
  
  function cmdRel(dir) {
    try {
        delete require.cache[require.resolve(`../../comandos/${dir}/${args[0]}.js`)];
        client.commands.delete(fileName); 
        const file = require(`../../comandos/${dir}/${args[0]}.js`);
        client.commands.set(fileName, file);
    } catch (err) {}
}
['array', 'sub', 'carpeta'].forEach(x => cmdRel(x));
message.channel.send(`El archivo ${args[0]} se ha actualizado`);
  }