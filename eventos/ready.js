const Discord = require('discord.js');


module.exports = (client) => {
  console.log(
    `Estoy listo!, conectado en ${client.guilds.cache.size} servidores y  ${client.users.cache.size} usuarios.`);


  setInterval(function() {

    let estados = [
    "http://eu.muoriginrenegade.com/signin",
     `We have ${client.users.cache.size} users on our server.`,
    "Free to Play",
    "Europe Origin 2 - All Right Reserved",
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
