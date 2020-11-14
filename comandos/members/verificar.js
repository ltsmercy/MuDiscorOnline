const Discord = require("discord.js");


module.exports = (client, message, args) => {       

if(message.channel.id !== "770489981431971850") return message
      .reply("**Opps.** Solo puedes usar este comando en <#770489981431971850>")
      .then(m => m.delete({ timeout: 5000 }));   
             
function getRandomInt(min, max) {
 min = Math.ceil(min);
 max = Math.floor(max);
 return Math.floor(Math.random() * (max - min)) + 10000;
}

let frases = ["🌊 ¡Me gusta el ritmo de las olas!", 
"🍎 ¿Tienes una manzana para mí?", 
"🌤️ Hace un hermoso día afuera."]

let frase = frases[Math.floor(Math.random() * frases.length)]
               
let codigo = getRandomInt(1111, 9999);

message.author.send(`${frase} Tu clave de verificación en ${message.guild.name} es \`${codigo}\``);
                
                
message.channel.send(`Hey ${message.author}, Te envié tu clave de verificación al privado. Tienes __**2 minutos**__ y __**1 intento**__ para escribir tu clave acá o expirara.`).then(m => m.delete({timeout: 120000})) 

const filter_reset = response => {
 if (response.author.id === message.author.id) return response.content;
};

message.channel.awaitMessages(filter_reset, { max: 1 ,time: 120000, errors: ['time'] }).then(collected => {
 
 if (isNaN(collected.first().content)) return message.channel.send('El codigo `'+collected.first().content+'` no es el solicitado.');

if (+collected.first().content !== +codigo) return message.channel.send('El codigo `'+collected.first().content+'` no es el solicitado.');
                            

message.channel.send(`${message.author}, ¡felicidades! has sido verificado exitosamente en__** ${message.guild.name}**__ se te ha otorgado el rol <@&770489940231847946>.`).then(m => m.delete({timeout: 130000}))    

 
message.member.roles.add("770489940231847946")
message.member.roles.remove("770489940852342794")
	   

 })


.catch(collected => {
 message.channel.send(`${message.author}, __**Opps**__ se te ha agotado el tiempo, vuelve a pedir tu codígo.`).then(m => m.delete({timeout: 60000}));
     });
  };