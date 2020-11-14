
const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"));
const listener = app.listen(process.env.PORT, () =>
  console.log("Your app is listening on port " + listener.address().port)
);
//-----------------------Ignorad lo de arriba, es el codigo que viene en un nuevo proyecto de Glitch

const Discord = require("discord.js");
const client = new Discord.Client({ ws: { intents: 32767, properties: { $browser: 'Discord iOS' }}});
const config = require("./config.json");

let { readdirSync } = require("fs");

//const fs = require("fs");


client.comandos = new Discord.Collection();
client.eventos = new Discord.Collection();


for(const subcarpet of readdirSync('./comandos/')) { //aqui haras que lea la carpeta donde tienes subcarpetas
    for(const file of readdirSync(`./comandos/${subcarpet}`)){
  if(file.endsWith(".js")) {
  let fileName = file.substring(0, file.length - 3);
let fileContents = require(`./comandos/${subcarpet}/${file}`);
  client.comandos.set(fileName, fileContents);
  console.log(fileName+ "👾 | fue cargado correctamente")
  }
    	
    }
	
}


for (const file of readdirSync("./eventos")) {
  if (file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./eventos/${file}`);
    client.on(fileName, fileContents.bind(null, client));
  }  
}

client.login(config.token);
