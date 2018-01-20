const Discord = require('discord.js');
const bot = new Discord.Client();



var cleverbot = require("cleverbot.io");
var talkbot = new cleverbot('1ZQOuHL2HlBRhvE9','6SgqVPxAwKCam7dYvdssCeXYP5G4YoV0');


bot.on('message', message => {
    if(message.channel.name !== "abusecleverbot") return  
    if(message.author.bot) return;
    talkbot.ask(message.content, function (err, response) {
    message.channel.send(response); // Will likely be: "Living in a lonely world"
  });

});


bot.login("Mzk1NzY5NDUyNzIzMDQ0MzYy.DUKzng.w0U93Cxquvl0AApFvDnmJy0y4D0")
