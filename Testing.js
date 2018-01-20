const Discord = require('discord.js');
const bot = new Discord.Client();






bot.on('message', message => {
if(message.content === '-Abuse') {
message.channel.send('YOU DID IT YOU GOT THIS BOT ON HEROKU')
}
});


bot.login("Mzk1NzY5NDUyNzIzMDQ0MzYy.DUKzng.w0U93Cxquvl0AApFvDnmJy0y4D0")
