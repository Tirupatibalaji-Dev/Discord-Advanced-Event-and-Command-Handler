const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
client.config = require('./config.json')
const config = require('./config.json')
const prefix = client.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.login(token)