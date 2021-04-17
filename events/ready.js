
module.exports = (client, message) => {
    client.user.setActivity(`${client.config.prefix}help`)
    console.log(`${client.user.username} ✅`)
    console.log(`Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}