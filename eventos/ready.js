const Discord = require('discord.js');


module.exports = (client) => {
  console.log(
    `Estoy listo!, conectado en ${client.guilds.cache.size} servidores y  ${client.users.cache.size} usuarios.`);


  setInterval(function() {

    let estados = [
    "https://web.mudiscord.online/",
     `Tenemos ${client.users.cache.size} Usuarios en nuestro servidor.`,
    `Estoy conectado en ${client.guilds.cache.size} servidor.`,
    "Usa !comandos",
    "Mu Online Discord 2020. Derecho reservados",
    ];

    let estado = estados[Math.floor(estados.length * Math.random())];


    client.user.setPresence({
      status: "online",
      activity: {
        name: estado,
        type: "WATCHING"
      }
    });

  }, 60000);
};
