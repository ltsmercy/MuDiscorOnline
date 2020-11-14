const Discord = require("discord.js");
const ms = require('ms');

module.exports = async (client, message, args) => {
  message.delete();
        
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Opps** No tiene el permiso necesario para usar este comando').then(m => m.delete({ timeout: 5000 }));

        let channel = message.mentions.channels.first();

        if (!channel) return message.channel.send('Mencione un canal donde se enviara el **SORTEO**').then(m => m.delete({ timeout: 5000 }));

        let giveawayDuration = args[1];

        if (!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send('Porfavor el tiempo de duracion del **Sorteo.**').then(m => m.delete({ timeout: 5000 }));

        let giveawayWinners = args[2];

        if (isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send('Porfavor elija cuantos ganadores podran ganar!').then(m => m.delete({ timeout: 5000 }));

        let giveawayPrize = args.slice(3).join(" ");

        if (!giveawayPrize) return message.channel.send('No has dicho ningun premio para ganar.').then(m => m.delete({ timeout: 5000 }));

        client.giveawaysManager.start(channel, {
            time: ms(giveawayDuration),
            prize: giveawayPrize,
            winnerCount: giveawayWinners,

            messages: {
                giveaway: ("@everyone\n\n") + "Un **SORTEO** ha comenzado. ¡Participa!",
                giveawayEnded: ("@everyone\n\n") + "Ha Terminado el **SORTEO**",
				embedTitle: "Mu Discord Online - Sorteo",
                timeRemaining: "Tiempo Restante: **{duration}**",
                inviteToParticipate: "Reacciona 🎉 para participar",
                winMessage: "Felicidades {winners}, eres el ganador de**{prize}**",
                embedFooter: "Tiempo del SORTEO.",
                noWinner: "¡No ha habido ningun ganador!",
                winners: "Ganador(ra/res/as)",
                endedAt: "Ha finalizado.",
                units: {
                    seconds: "Segundos",
                    minutes: "Minutos",
                    hours: "Horas",
                    days: "Días",
                    pluralS: false
                }
            }
        })

        message.channel.send(`El **Sorteo** se ha enviado exotosamente al canal ${channel}`).then(m => m.delete({ timeout: 20000 }));
    };