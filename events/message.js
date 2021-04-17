module.exports = (client, message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(client.config.prefix)) return;
  const args = message.content.slice(client.config.prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
}