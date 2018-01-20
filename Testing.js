const Discord = require('discord.js');
const bot = new Discord.Client();






bot.on('message', message => {
if(message.content === '-Abuse') {
message.channel.send('YOU DID IT YOU GOT THIS BOT ON HEROKU')
}
});


bot.login(process.env.BOT_TOKEN)
