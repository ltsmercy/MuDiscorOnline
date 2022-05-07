const ms = require('ms');

module.exports = async (client, message, args) => {
	message.delete()

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Opps** no tienes permiso para usar este comando.').then(m =>  m.delete({ timeout: 5000 }));

        if(!args[0]) return message.channel.send('Debe proveer el id del mensaje del Sorteo.').then(m =>  m.delete({ timeout: 5000 }));

        let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

        if(!giveaway) return message.channel.send('No pude encontrar un Sorteo con esa ID.').then(m =>  m.delete({ timeout: 5000 }));

        client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Sorteo resorteado.')
        })
        .catch((e) => {
            if(e.startsWith(`Este Sorteo con este ID ${giveaway.messageID} no ha terminado aún.`)){
                message.channel.send('Este Sorteo aún no ha terminado')
            } else {
                console.error(e);
                message.channel.send('An error occured')
            }
        })
    }
