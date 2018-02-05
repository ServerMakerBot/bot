const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')
const config = require("./config.json");
var prefix = config.prefix1

bot.on('message', message => { 
    if ( message.content.toLowerCase() === prefix + 'shutdown') {
    if (message.author.bot) return; {
      if (message.author.id === "335893092756488205") {
        var embed = new Discord.RichEmbed();
        embed.setColor('RED');
        embed.setDescription('Shutting down...\nT - 30 seconds');
        const m1 = message.channel.send({embed});
	      
	setTimeout(goodbye, 10000)      
	function goodbye() {
	var embed = new Discord.RichEmbed();
        embed.setColor('RED');
        embed.setDescription('Goodbye I am never coming back :cry:');
	m1.edit({embed})	
	};      
	      
        setTimeout(shutdown, 30000);
        function shutdown() {
            process.exit(0);
          };
        
      } else {
        message.channel.send(message.author + ' Insufficient permissions.');

      }
    }
  }
});

bot.on('message', message => { 
    if ( message.content.toLowerCase() === prefix + 'restart') {
    if (message.author.bot) return; {
      if (message.author.id === "335893092756488205") {
        var embed = new Discord.RichEmbed();
        embed.setColor('RED');
        embed.setDescription('Restarting...\nT - 30 seconds');
        message.channel.send({embed});
        setTimeout(shutdown, 30000);
        function shutdown() {
            process.exit(1);
          };
        
      } else {
        message.channel.send(message.author + ' Insufficient permissions.');

      }
    }
  }
});

bot.on('message', (message) =>{
    let guild = message.guild
    if(message.content.toLowerCase() == prefix + "hello"){
        message.reply(' \rHello hope your having a **Nice Day**.It took **' + Math.round(bot.ping) + 'ms** to get to you.');
    }
    if(message.content.toLowerCase() == prefix + "roll"){
        message.channel.sendMessage(':game_die: ' + Math.floor(Math.random() * (6 - 1 + 1) + 1));
    }
    if(message.content.toLowerCase() == prefix + "invite mobile"){
        message.author.createDM()
        message.author.sendMessage('BradGamez Corporation : <https://discord.gg/ZzhXzzd>\nBot Invite : <https://discordapp.com/oauth2/authorize?client_id=368486558346772480&scope=bot&permissions=8>\nBradGamez Corporation Website : <https://bradgamezcorporation.weebly.com>')
        message.channel.sendMessage("A DM has been sent to " + message.author + " with Invite Information")
    }   
    if(message.content.toLowerCase() == prefix + "invite mobile" || message.content.toLowerCase() == prefix + "invite"){
        var embed = new Discord.RichEmbed();
        embed.setTitle('Invite')
        embed.setColor(message.member.colorRole.hexColor)
        embed.setTimestamp()
        embed.setDescription('Guild Name : ' + guild.name + '\nGuild ID : ' + guild.id + '\nMessage Author : ' + message.author.username + '#' + message.author.discriminator + '\nMessage Author ID : ' + message.author.id + '\nMessage Author Role : ' + message.member.highestRole.name + '\nGuild Owner : ' + guild.owner.user.username + '#' + guild.owner.user.discriminator + '\nGuild Channel : ' + message.channel.name + '\nGuild Members : ' + guild.memberCount)
        bot.channels.get('344719772812050433').sendMessage({embed});
    }    
})

bot.on('message', message => {
    var user = message.mentions.users.first(); 
    if (message.content.toLowerCase().startsWith(prefix + 'l') && user) { 
            message.channel.sendMessage(user + ' Hold This **L**');    
    }
});

bot.on('message', message => {
    var guild = message.guild;
    var author = message.author;
    var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
    if (message.content.startsWith(prefix + 'setplayingstatus')) {
        if (message.author.id === "335893092756488205") {
            
        bot.user.setGame(g)
        var embed = new Discord.RichEmbed();
        if (message.author.bot) return;
        embed.setColor('BLUE');
        embed.setDescription("Playing status set to**" + g + "**");
      message.channel.send({embed});
    } else {
        var embed = new Discord.RichEmbed();
        if (message.author.bot) return;
        embed.setColor('RED');
        embed.setDescription("You do not have permission to use this command.");
	embed.setFooter("Must be Bot Owner")
      message.channel.send({embed}); 
    }        

}

});

bot.on('message', message => {
  
      var guild = message.guild;
  
      var author = message.author;
  
      var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
  
      if (message.content.startsWith(prefix + 'setavatar')) {
  
          if (message.author.id === "335893092756488205") {
  
              
  
          bot.user.setAvatar(g)
  
          var embed = new Discord.RichEmbed();
  
          if (message.author.bot) return;
  
          embed.setColor('BLUE');
  
          embed.setDescription("Avatar set to**" + g + "**");
  
        message.channel.send({embed});
  
      } else {
  
          var embed = new Discord.RichEmbed();
  
          if (message.author.bot) return;
  
          embed.setColor('RED');
  
          embed.setDescription("You do not have permission to use this command.");
  
    embed.setFooter("Must be Bot Owner")
  
        message.channel.send({embed}); 
  
      }        
  
  
  
  }
  
  
  
  });



  bot.on('message', message => {
    
        var guild = message.guild;
    
        var author = message.author;
    
        var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
    
        if (message.content.startsWith(prefix + 'setusername')) {
    
            if (message.author.id === "335893092756488205") {
    
                
    
            bot.user.setUsername(g)
    
            var embed = new Discord.RichEmbed();
    
            if (message.author.bot) return;
    
            embed.setColor('BLUE');
    
            embed.setDescription("Username set to**" + g + "**");
    
          message.channel.send({embed});
    
        } else {
    
            var embed = new Discord.RichEmbed();
    
            if (message.author.bot) return;
    
            embed.setColor('RED');
    
            embed.setDescription("You do not have permission to use this command.");
    
      embed.setFooter("Must be Bot Owner")
    
          message.channel.send({embed}); 
    
        }        
    
    
    
    }
    
    
    
    });

bot.on('message', message => {
    let guild = message.guild
    var user = message.mentions.users.first();
    var embed = new Discord.RichEmbed();
    if (message.content.toLowerCase().startsWith(prefix + 'userinfo') && user) { 
    embed.setAuthor(user)
    embed.addField('Discord Name & ID', user.username + '#' + user.discriminator)
    embed.addField('Account Creation Date', user.createdAt)
    embed.addField('ID', user.id)
    embed.addField('Last Message', user.lastMessageID)   
    embed.addField('Bot?', user.bot) 
    embed.setThumbnail(user.displayAvatarURL)
    embed.setColor('#02f5e1')
    message.channel.send({embed}); return;
    } 
});

    bot.on('message', message => {
        let guild = message.guild
        if (message.content.toLowerCase() == prefix + "serverinfo") {
            var embed = new Discord.RichEmbed();
            embed.setTitle(guild.name)
            embed.addField('Founder:', guild.owner)
            embed.addField('Founders ID:', guild.ownerID)
            embed.addField('Founded on:', guild.createdAt)
            embed.addField('Region:', guild.region)
            embed.addField('Uptime:', process.uptime())
            embed.addField('Member Count:', guild.memberCount)
            embed.addField("Bot Count:", guild.members.filterArray(a => a.user.bot).length, true);            
            embed.addField('Online:', guild.members.filter(m => m.presence.status === 'online').size)
            embed.addField('Offline:', guild.members.filter(m => m.presence.status === 'offline').size)
            embed.setThumbnail(guild.iconURL)
            embed.addField('Channels:', guild.channels.size)
            embed.addField('Roles:', guild.roles.size)
            embed.addField('Emojis:', guild.emojis.size)
            embed.setColor('#01ee4d')
            message.channel.send({embed}); return;
        }});

            bot.on('message', message => {
                var guild = message.guild;
                var author = message.author;
                var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
                if (message.content.toLowerCase().startsWith(prefix + 'say')) {
                    message.delete();
                    var embed = new Discord.RichEmbed();
                    if (message.author.bot) return;
                    embed.setColor('BLUE');

                    embed.setDescription(g);
                  message.channel.send({embed});
                }
            });

             bot.on('message' , async message => {
                var embed = new Discord.RichEmbed();                                                        
                if (message.content.toLowerCase() === prefix + "ping") {
   		const m = await message.channel.send("Ping?");
    		var ping = Math.round(m.createdTimestamp - message.createdTimestamp)
                    embed.setColor('BLUE');
                    embed.setDescription("Latency ping " + ping + "ms\nApi ping " + Math.round(bot.ping) + 'ms')
                    m.edit({embed});
                }});                             


            bot.on('message', message => {
                let guild = message.guild
                var user = message.mentions.users.first();
                var embed = new Discord.RichEmbed();
                if (message.content.toLowerCase().startsWith(prefix + 'abuse') && user) {
                    message.delete(); 
                    embed.setDescription('#Stop' + user.username + 'Abuse');
                    embed.setColor('GREEN');
                    message.channel.send({embed});
                }});

                bot.on('message', message => {
                    let guild = message.guild
                    var user = message.mentions.users.first();
                    var embed = new Discord.RichEmbed();
                    if (message.content.toLowerCase().startsWith(prefix + 'blame') && user) { 
                        message.delete();
                        embed.setDescription('#Blame ' + user.username);
                        embed.setColor('RED');
                        message.channel.send({embed});
                    }});

                    
                bot.on('message' , message => {
                    var embed = new Discord.RichEmbed();
                if(message.content.toLowerCase() == prefix + "rr"){
                    message.react('🔫')
                    if(Math.floor(Math.random() * (6 - 1 + 1) + 1) >=4) {
                    embed.setColor("GREEN")
                    embed.setDescription(message.author + ' You Lived This Time... :rose:')
                    embed.setTimestamp(); 
                    message.channel.send({embed});
                } else {
                    embed.setColor('RED')
                    embed.setDescription(message.author + ' You died... :fire:')
                    embed.setTimestamp();                  
                    message.channel.send({embed});
                    
                }}
            });

            bot.on('message', message => {
                var guild = message.guild;
                var embed = new Discord.RichEmbed();
                if (message.content.toLowerCase() === prefix + "members") {
                    message.delete();
                    embed.setColor('BLUE');
                    embed.setDescription('Total Members : ' + guild.memberCount + '\nOnline Members : ' + guild.members.filter(m => m.presence.status === "online").size + '\nIdle Members : ' + guild.members.filter(m => m.presence.status === "idle").size + '\nDo Not Disturb Members : ' + guild.members.filter(m => m.presence.status === "dnd").size + '\nOffline Members : ' + guild.members.filter(m => m.presence.status === "offline").size + '\nBot Members : ' + guild.members.filterArray(a => a.user.bot).length + '\nHuman Members : ' + Math.floor(guild.memberCount - guild.members.filterArray(a => a.user.bot).length));
                    message.channel.send({embed});
                }})

                bot.on('message' , message => {
                    if (message.content.toLowerCase() == prefix + 'bothelp') {
                        var embed = new Discord.RichEmbed();
                        if (message.author.bot) return;
                        embed.setTitle('Bot Info');
                        embed.setColor('BLUE');
                        embed.setDescription('List Of Things You Will Need For Abuse');
                      embed.addBlankField();
                      embed.addField('#welcome', 'Auto Welcomes');
		      embed.addField('#abusecleverbot', 'Talk to my bot');
                      embed.addField('#mod-logs', 'Auto Logs')                
                      message.channel.send({embed});
                        }
                });



                bot.on('message' , message => {
                    let tosend = ['```xl', prefix + 'join : "Join Voice channel of msg sender"',	prefix + 'add : "Add a valid youtube link to the queue"', prefix + 'queue : "Shows the current queue, up to 15 songs shown."', prefix + 'play : "Play the music queue if already joined to a voice channel"', '', 'the following commands only function while the play command is running:'.toUpperCase(), prefix + 'pause : "pauses the music"',	prefix + 'resume : "resumes the music"', prefix + 'skip : "skips the playing song"', prefix + 'time : "Shows the playtime of the song."',	'volume+(+++) : "increases volume by 2%/+"',	'volume-(---) : "decreases volume by 2%/-"',	'```'];
                    
                    if (message.content.toLowerCase() == prefix + 'help') {
                        var embed = new Discord.RichEmbed();
                        embed.setTitle('**Categories**');
                        embed.setColor('BLUE');
                        embed.setDescription('**' +prefix + 'help** moderation / mod\n**' + prefix + 'help** fun\n**' + prefix + 'help** music\n**' + prefix + 'help** other\n**' + prefix + 'help** info')
                        message.channel.send({embed})
                        }
                     if (message.content.toLowerCase() == prefix + 'help moderation' || message.content.toLowerCase() == prefix + 'help mod') {
                            var embed = new Discord.RichEmbed();
                            embed.setTitle('Commands');
                            embed.setColor('BLUE');
                            embed.setDescription('\n**' + prefix + 'warn :** give a notice to a rule breaker\n**' + prefix + 'kick :** kicks the member from the guild\n**' + prefix + 'bothelp :** shows auto moderation channels\n**' + prefix + 'listroles :** list all roles in guild');
                            message.channel.send({embed});
                            }
                            if (message.content.toLowerCase() == prefix + 'help fun') {
                                var embed = new Discord.RichEmbed();
                                embed.setTitle('Commands');
                                embed.setColor('BLUE');
                                embed.setDescription('\n**' + prefix + 'puppy :** shows cute puppies\n**' + prefix + 'abuse :** stop the abuse\n**' + prefix + 'blame :** blame a user\n**' + prefix + 'roll :** roll a dice\n**' + prefix + 'rr :** do you live or die\n**' + prefix + 'l :** give a user a big L**\n' + prefix + 'say :** make the bot talk');
                                message.channel.send({embed});
                                }
                                if (message.content.toLowerCase() == prefix + 'help music') {
                                    var embed = new Discord.RichEmbed();
                                    embed.setTitle('Commands');
                                    embed.setColor('BLUE');
                                    embed.setDescription(tosend.join('\n'));
                                    message.channel.send({embed});
                                    }
                                    if (message.content.toLowerCase() == prefix + 'help other') {
                                        var embed = new Discord.RichEmbed();
                                        embed.setTitle('Commands');
                                        embed.setColor('BLUE');
                                        embed.setDescription('\n**' + prefix + 'hello :** say hi to Abuse\n**' + prefix + 'image :** link to picture\n**' + prefix + 'members :** list members in guild\n**' + prefix + 'userinfo :** get user\'s info\n**' + prefix + 'serverinfo :** get guild info');
                                        message.channel.send({embed});
                                        }
                                        if (message.content.toLowerCase() == prefix + 'help info') {
                                            var embed = new Discord.RichEmbed();
                                            embed.setTitle('Commands');
                                            embed.setColor('BLUE');
                                            embed.setDescription('\n**' + prefix + 'invite / ' + prefix + 'invite mobile :** invite info\n**' + prefix + 'ping :** bot\'s ping\n**' + prefix + 'uptime :** bot\'s uptime');
                                            message.channel.send({embed});
                                            }
                                            if (message.author.id == '335893092756488205'){                                                       
                                            if (message.content.toLowerCase() == prefix + 'help owneronly') {
                                                var embed = new Discord.RichEmbed();
                                                embed.setTitle('Commands');
                                                embed.setColor('BLUE');
                                                embed.setDescription('\n**' + prefix + 'play :** music command (not working yet)\n**' + prefix + 'prefix1 :** prefix setting 1\n**' + prefix + 'prefix2 :** prefix setting 2\n**' + prefix + 'automessage :** auto message setting\n**' + prefix + 'autochannelid :** auto channel id setting 2\n**' + prefix + 'shutdown :** shuts down bot\n**' + prefix + 'botinfo :** shows servers and users\n**' + prefix + 'chat :** repeats your message\n**' + prefix + 'logsinfo :** sents server info to mod logs of Abuse server\n**' + prefix + 'setplayingstatus :** sets plaing status of the bot\n**' + prefix + 'setavatar :** sets avatar of the bot\n**' + prefix + 'setusername :** sets username of the bot');
                                                message.channel.send({embed});
   
                                                    }}
                });



                bot.on('message', message => {
                    let guild = message.guild;
                    var user = message.mentions.users.first();
                    var author = message.author;
                    var args = message.content.split(' '); var s = ""; for(var i = 1; i < args.length; i++){ s = s+" "+args[i]; }
                    if (message.content.toLowerCase().startsWith(prefix + 'kick') && user) { 
                        if(message.guild.member(message.author).hasPermission('KICK_MEMBERS') || message.author.id == '335893092756488205') {                    
                            message.guild.member(guild.member(user.id)).kick(s)
                        var embed = new Discord.RichEmbed();
                        if (message.author.bot) return;
                        embed.setTitle('Kick From ' + guild.name);
                        embed.setColor('RED');
                        embed.setDescription(s);
                      embed.setFooter('You Have Been Kicked');
                      embed.setTimestamp();
                      message.channel.send({embed});
                    }}
                });





                bot.on('message', message => {
                    let guild = message.guild;
                    var user = message.mentions.users.first();
                    var embed = new Discord.RichEmbed();
                    var args = message.content.split(' '); 
                   var w = "";  for (var i = 1; i < args.length; i++){ w = w+" "+args[i]; }
                    if (message.content.toLowerCase().startsWith(prefix + 'warn') && user) { 
                        if(message.guild.member(message.author).hasPermission('MANAGE_MESSAGES') || message.author.id == '335893092756488205') {                    
                        user.createDM()
                        embed.setTitle('Warning From ' + guild.name);
                        embed.setColor('#ebff08');
                        embed.setDescription('Reason:' + w);
                      embed.setFooter('Dont Break The Rules Again');
                      embed.setTimestamp();
                      user.send({embed});
                        
                      if (message.author.bot) return;
                      embed.setTitle('Warning From ' + guild.name);
                      embed.setColor('#ebff08');
                      embed.setDescription('Reason:' + w);
                    embed.setFooter('Dont Break The Rules Again');
                    embed.setTimestamp();
                    message.channel.send({embed});
                }}
                });

                bot.on('message', message => {
                    var guild = message.guild;
                    var author = message.author;
                    var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
                    if (message.author.id == '335893092756488205'){       
                    if (message.content.toLowerCase().startsWith(prefix + 'chat')) { 
                        message.delete();
                        if (message.author.bot) return;
                        message.channel.sendMessage(g)
                    }} 
                });

                bot.on('message', message => {
                    let guild = message.guild
                    if (message.content.toLowerCase() == prefix + "invite") {                        
                        var embed = new Discord.RichEmbed();
                        embed.setTitle("Invite")
                        embed.setColor("BLUE")
                        embed.setDescription('[BradGamez Corporation](https://discord.gg/ZzhXzzd)\n[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=368486558346772480&scope=bot&permissions=8)\n[BradGamez Corporation Website](https://bradgamezcorporation.weebly.com/)')
                        embed.setTimestamp()
                        message.channel.send({embed}); return;
                    }});

                    bot.on('message', message => {
                        let guild = message.guild
                        var embed = new Discord.RichEmbed();
                        if (message.content.toLowerCase().startsWith(prefix + 'uptime')) {
                            String.prototype.toHHMMSS = function () {
                                var sec_num = parseInt(this, 10); // don't forget the second param
                                var hours   = Math.floor(sec_num / 3600);
                                var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                                var seconds = sec_num - (hours * 3600) - (minutes * 60);
                            
                                if (hours   < 10) {hours   = "0"+hours;}
                                if (minutes < 10) {minutes = "0"+minutes;}
                                if (seconds < 10) {seconds = "0"+seconds;}
                                var time    = hours+' Hours ,'+minutes+' Minutes ,'+seconds + ' Seconds';
                                return time;
                            }
                            var time = process.uptime();
                            var uptime = (time + "").toHHMMSS();
                        
                            embed.setDescription(uptime);
                            embed.setColor('#0cebcf');
                            embed.setTimestamp()
                            message.channel.send({embed});
                        }});














                    bot.on('guildMemberAdd', member => {
                        const welcome = member.guild.channels.find('name' , 'welcome')
                        const log = member.guild.channels.find('name' , 'mod-logs')                        
                        let guild = member.guild
                        var embed = new Discord.RichEmbed();
                        if (welcome && log){
                        embed.setColor('GREEN')
                        embed.setDescription('Welcome ' + member.user.username + ' to ' + guild.name)
                        bot.channels.get(welcome.id).send({embed});

                        embed.setColor('GREEN')
                        embed.setTitle('User Joined')
                        embed.setDescription(member.user + ' Has Joined The Guild.') 
                        embed.setFooter('Total Members : ' + guild.memberCount)
                        embed.setTimestamp();   
                        bot.channels.get(log.id).send({embed});
                    }});
                    
                    bot.on('guildMemberRemove', member => {
                        const welcome = member.guild.channels.find('name' , 'welcome')
                        const log = member.guild.channels.find('name' , 'mod-logs')                                              
                        let guild = member.guild
                        var embed = new Discord.RichEmbed();
                        if (welcome && log){                            
                        embed.setColor('RED')
                        embed.setDescription('GoodBye ' + member.user.username + ' You Will Be Missed.')
                        bot.channels.get(welcome.id).send({embed});

                        embed.setColor('RED')
                        embed.setTitle('User Left')
                        embed.setDescription(member.user + ' Has Left The Guild.')  
                        embed.setFooter('Total Members : ' + guild.memberCount)  
                        embed.setTimestamp();
                        bot.channels.get(log.id).send({embed});
                    }});

                    bot.on('message' , message => {                            
  		var embed = new Discord.RichEmbed();   
 		var puppy = ["https://i.ytimg.com/vi/VRiWE1l8KqI/maxresdefault.jpg", "http://barkingroyalty.com/wp-content/uploads/2015/12/cutest-puppies.jpg", "https://i.ytimg.com/vi/Ce7hJ24a8yM/maxresdefault.jpg", "https://i.ytimg.com/vi/HswVfWs7aIA/maxresdefault.jpg", "https://i.pinimg.com/736x/eb/5c/78/eb5c78657282a7c7715939aac4553dcb--google-search-yahoo-search.jpg", "https://www.candis.co.uk/wp-content/uploads/2015/03/22-24_tn.jpg", "https://i.ytimg.com/vi/3ggIHfwkIWM/maxresdefault.jpg", "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/20/16/enhanced/webdr05/enhanced-30545-1426883395-12.jpg?downsize=715:*&output-format=auto&output-quality=auto", "http://www.petsworld.in/blog/wp-content/uploads/2014/09/running-cute-puppies.jpg", "http://dogsbarn.com/wp-content/uploads/2017/01/Chihuahua-.jpg", "http://www.lifewithdogs.tv/wp-content/uploads/2015/05/5.16.15-Cutest-Sleeping-Puppies5.jpg","https://cdn.discordapp.com/attachments/378324905692758047/395338342637502478/image.png"]
  		if(message.content.toLowerCase() == prefix + "puppy"){
  		embed.setColor("#ffffff")
  		embed.setImage(puppy[Math.floor(Math.random() * (puppy.length - 1 + 1) + 1)])
  		message.channel.send({embed});                                

		}

	});



                bot.on('message', message => {
                    var guild = message.guild;
                    var author = message.author;
                    var args = message.content.split(' '); var g = " "; for(var i = 1; i < args.length; i++){ g = g+" "+args[i]; }
                    if (message.content.toLowerCase().startsWith(prefix + 'image')) {
                        message.delete();
                        var embed = new Discord.RichEmbed();
                        if (message.author.bot) return;
                        embed.setColor('BLUE');
                        embed.setImage(g);
                      message.channel.send({embed});
                    }
                    
                });
                

                bot.on('message', message => {

                    let guild = message.guild;
                    if(message.content.toLowerCase() == prefix + 'botinfo'){
                        if (message.author.id == '335893092756488205'){                   
                        var embed = new Discord.RichEmbed();
                        if (message.author.bot) return;
                        embed.setColor('BLUE');
                        embed.setTitle('Abuse Info')
                         embed.addField('Number of Servers :', bot.guilds.size);
                         embed.addField('Number of Users :', bot.users.size);

                         
                         
                      message.channel.send({embed});
                      
                    }}
                    if (message.author.id == '335893092756488205'){                   
                        
                    if(message.content.toLowerCase() == prefix + "logsinfo"){
                        var embed = new Discord.RichEmbed();
                        embed.setTitle('Server Info')
                        embed.setColor(message.member.colorRole.hexColor)
                        embed.setTimestamp()
                        embed.setDescription('Guild Name : ' + guild.name + '\nGuild ID : ' + guild.id + '\nMessage Author : ' + message.author.username + '#' + message.author.discriminator + '\nMessage Author ID : ' + message.author.id + '\nMessage Author Role : ' + message.member.highestRole.name + '\nGuild Owner : ' + guild.owner.user.username + '#' + guild.owner.user.discriminator + '\nGuild Channel : ' + message.channel.name + '\nGuild Members : ' + guild.memberCount)
                        bot.channels.get('344719772812050433').sendMessage({embed});
                        message.channel.send('Info sent to logs.')
                    } }
                });
                    
                    bot.on('ready', () => {
                        console.log('Abuse Bot on')
                        var gamez = ['in ' + bot.guilds.size + " Servers", prefix + "help || " + prefix + 'invite', "with " + bot.users.size + " Users"];
                        let count = 0;
                        function oof(){
                        if(count > gamez.length - 1) count = 0;
                        bot.user.setGame(gamez[count++]);
                        }
                        setInterval(oof, 600000);
                        });









                        bot.on('message', msg => {
                            let guild = msg .guild
                            
                              if (msg.author.bot) return; //returns if the sender of the message is a bot
                            
                              var embed = new Discord.RichEmbed();
                            
                              embed.setColor('49c5ff');
                            
                              if (msg.content.startsWith(prefix + 'addrole')) {
                            
                                if (msg.author.id == '335893092756488205' || msg.author.id === guild.ownerID) { //checks if the user has the permission to manage roles or the user is a mod
                            
                                  var args = msg.content.substring(prefix.length).split(" "); //splits the messages at the spaces into an array called args
                            
                                  var user = msg.mentions.users.first(); //sets user equal to the first mentioned user
                            
                                  var embed = new Discord.RichEmbed();
                            
                                  if (user && args.length >= 3 && msg.content.startsWith(prefix + 'addrole <@')) { //checks if a user is mentions, there is a role tagged, and its in the correct order
                            
                                    var col = msg.guild.roles; //sets col equal to a collection of roles in the guild
                            
                                    if (col.array().length == 0) { //checks if there are any roles
                            
                                      embed.setDescription('There are no roles to assign');
                            
                                    } else { //if there are roles this executes
                            
                                      var rol = '' //sets rol to an empty value so it can be used to store a roles name
                            
                                      for (var i = 2; i < args.length; i++) {
                            
                                        rol = rol + args[i] + ' ';
                            
                                      }
                            
                                      rol = rol.toLowerCase().trim(); //set rol to lowercase and trims it of trailing and leading spaces
                            
                                      var role = col.find(val => val.name.toLowerCase() == rol); //sets the current item in col's name to lowercase and then compares it to rol and sets role to the role found if one is found
                            
                                      if (role) //if the role exists then this is executed
                            
                                      {
                            
                                        if (role.comparePositionTo(msg.guild.member(bot.user).highestRole) < 0) { //if the bot's highest role is higher than the role trying to be assigned this executes
                            
                                          msg.guild.member(user).addRole(role);
                            
                                          embed.setDescription(user + " has been assigned the role '" + role.name + "'")
                            
                                        } else { //if the bots highest role is not higher than the role being assigned this executes
                            
                                          embed.setDescription('The bot does not have a high enough role to assign the role "' + role.name + '"');
                            
                                        }
                            
                                      } else { //if the role does not exist then this is executed
                            
                                        embed.setDescription('The role being assigned does not exist');
                            
                                      }
                            
                                    }
                            
                                  }
                            
                                  if (args.length == 1) { //checks if the message is not long enough to tag a user and role
                            
                                    embed.setDescription('Please tag a user and type the role you wish to assign');
                            
                                  }
                            
                                  if (user && args.length == 2) { //checks if a user is tagged and the message is only a user tag and the command
                            
                                    embed.setDescription('Please type a role to assign')
                            
                                  }
                            
                                  if (args.length >= 2 && !user) { //checks if a user is not tagged and more than the command is sent
                            
                                    embed.setDescription("Please tag a user");
                            
                                  }
                            
                                  if (args.length >= 2 && user && !msg.content.startsWith(prefix + 'addrole <@')) { //checks if a user is tagged there are more than enough arguments and the user is not after ar
                            
                                    embed.setDescription("Invalid format");
                            
                                  }
                            
                                } else { //if the user does not have sufficient permission this executes
                            
                                  embed.setDescription("You do not have sufficient permissions to assign a role");
                            
                                }
                            
                                msg.channel.send(embed);
                            
                              }
                            
                            });
                       
                            bot.on('message', msg => {
                                let guild = msg.guild
                                
                                  if (msg.author.bot) return; //returns if the sender of the message is a bot
                                
                                  if (msg.content.startsWith(prefix + 'removerole')) {
                                
                                    var embed = new Discord.RichEmbed();
                                
                                    embed.setColor('49c5ff');
                                
                                    if (msg.author.id == '335893092756488205' || msg.author.id === guild.ownerID) { //checks if the user has the permission to manage roles or the user is a mod
                                
                                      var args = msg.content.substring(prefix.length).split(" "); //splits the messages at the spaces into an array called args
                                
                                      var user = msg.mentions.users.first(); //sets user equal to the first mentioned user
                                
                                      if (user && args.length >= 3 && msg.content.startsWith(prefix + 'removerole <@')) { //checks if a user is mentions, there is a role tagged, and its in the correct order
                                
                                        var col = msg.guild.roles; //sets col equal to a collection of roles in the guild
                                
                                        if (col.array().length == 0) { //checks if there are any roles
                                
                                          embed.setDescription('There are no roles to assign');
                                
                                        } else { //if there are roles this executes
                                
                                          var rol = '' //sets rol to an empty value so it can be used to store a roles name
                                
                                          for (var i = 2; i < args.length; i++) {
                                
                                            rol = rol + args[i] + ' ';
                                
                                          }
                                
                                          rol = rol.toLowerCase().trim(); //set rol to lowercase and trims it of trailing and leading spaces
                                
                                          var role = col.find(val => val.name.toLowerCase() == rol); //sets the current item in col's name to lowercase and then compares it to rol and sets role to the role found if one is found
                                
                                          if (role) //if the role exists then this is executed
                                
                                          {
                                
                                            if (role.comparePositionTo(msg.guild.member(bot.user).highestRole) < 0) { //if the bot's highest role is higher than the role trying to be removed this executes
                                
                                              msg.guild.member(user).removeRole(role);
                                
                                              embed.setDescription('"' + role.name + '" has been removed from ' + user);
                                
                                            } else { //if the bots highest role is not higher than the role being removed this executes
                                
                                              embed.setDescription('The bot does not have a high enough role to remove the role "' + role.name + '"');
                                
                                            }
                                
                                          } else { //if the role does not exist then this is executed
                                
                                            embed.setDescription('The role being removed does not exist');
                                
                                          }
                                
                                        }
                                
                                      }
                                
                                      if (args.length == 1) { //checks if the message is not long enough to tag a user and role
                                
                                        embed.setDescription('Please tag a user and type the role you wish to remove');
                                
                                      }
                                
                                      if (user && args.length == 2) { //checks if a user is tagged and the message is only a user tag and the command
                                
                                        embed.setDescription('Please type a role to remove')
                                
                                      }
                                
                                      if (args.length >= 2 && !user) { //checks if a user is not tagged and more than the command is sent
                                
                                        embed.setDescription("Please tag a user");
                                
                                      }
                                
                                      if (args.length >= 2 && user && !msg.content.startsWith(prefix + 'removerole <@')) { //checks if a user is tagged there are more than enough arguments and the user is not after rr
                                
                                        embed.setDescription("Invalid format");
                                
                                      }
                                
                                    } else { //if the user does not have sufficient permission this executes
                                
                                      embed.setDescription("You do not have sufficient permissions to remove a role");
                                
                                    }
                                
                                    msg.channel.send(embed);
                                
                                  }
                                
                                });

                                bot.on('message', msg => {
                                    if(msg.author.bot) return; //returns if the sender of the message is a bot
                                    if(msg.content.toLowerCase().startsWith(prefix + 'listroles')){        
                                        var roleList = msg.guild.roles.sort((a, b) => a.calculatedPosition - b.calculatedPosition).map(r => r.name).reverse();//sorts the collection by calculatedPosition then maps it to an array with the name element and then reverses the array
                                        var str = "";
                                        for(var i = 0; i<roleList.length-1;i++)//goes through the roleList array and adds every element but the @everyone rank to the string
                                        {
                                            str = str+roleList[i]+', ';
                                        }
                                        var embed = new Discord.RichEmbed();
                                        embed.setColor('49c5ff');
                                        embed.setDescription(str.substring(0, str.length-2));//substring removes the trailing ', ' from the string
                                        msg.channel.send(embed);
                                    }
                                });

                                bot.on('message', message => {
                                    var guild = message.guild;
                                    var author = message.author;
                                    var args = message.content.split(' '); var d = " "; for(var i = 1; i < args.length; i++){ d = d+" "+args[i]; }
                                    if (message.content.startsWith(prefix + 'idea')) { 
                                        var embed = new Discord.RichEmbed();
                                        message.channel.send('Your idea has been logged and will be looked over by bot staff.')
                                        if (message.author.bot) return;
                                        embed.setColor('BLUE');
                                        embed.setDescription('Guild Name : ' + guild.name + '\nGuild ID : ' + guild.id + '\nMessage Author : ' + message.author.username + '#' + message.author.discriminator + '\nMessage Author ID : ' + message.author.id + '\nMessage Author Role : ' + message.member.highestRole.name + '\nGuild Owner : ' + guild.owner.user.username + '#' + guild.owner.user.discriminator + '\nGuild Channel : ' + message.channel.name + '\nGuild Members : ' + guild.memberCount + '\nIdea : ' + d)
                                        bot.channels.get('358754355752730625').send({embed});
                                    }
                                    if(message.author.id === "335893092756488205"){
                                    if(message.content.startsWith(prefix + "prefix1")) {
                                        // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
                                        let newPrefix = message.content.split(" ").slice(1, 2)[0];
                                        // change the configuration in memory
                                        config.prefix1 = newPrefix;
                                      
                                        // Now we have to save the file.
                                        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
                                        var embed = new Discord.RichEmbed();
                                        embed.setColor('BLUE');
                                        embed.setDescription('Prefix has been set to ' + config.prefix1)
                                        message.channel.send({embed});
                                      }}
                                      if(message.author.id === "335893092756488205"){
                                        if(message.content.startsWith(prefix + "prefix2")) {
                                            // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
                                            let newPrefix = message.content.split(" ").slice(1, 2)[0];
                                            // change the configuration in memory
                                            config.prefix2 = newPrefix;
                                          
                                            // Now we have to save the file.
                                            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
                                            var embed = new Discord.RichEmbed();
                                            embed.setColor('BLUE');
                                            embed.setDescription('Prefix has been set to ' + config.prefix2)
                                            message.channel.send({embed});
                                          }}
             
                                });
                     

                                bot.on('ready', () => {
                                    function oof(){
                                        bot.channels.get(config.autochannelid).send(config.automessage)
                                    
                                    } 
        
                                    setInterval(oof, 36000000);
                                    
                                })
        
                                bot.on('message', message => {
                                    
                                if(message.author.id === "335893092756488205" || message.author.id === "239903607250485249"){
                                    if(message.content.startsWith(prefix + "automessage")) {
                                        // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
                                        let newPrefix = message.content.split(" ").slice(1, 2)[0];
                                        // change the configuration in memory
                                        config.automessage = newPrefix;
                                      
                                        // Now we have to save the file.
                                        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
                                        var embed = new Discord.RichEmbed();
                                        embed.setColor('BLUE');
                                        embed.setDescription('Automessage has been set to ' + config.automessage)
                                        message.channel.send({embed});

                                    
                                    
                                    

                                    }}
                                      if(message.author.id === "335893092756488205" || message.author.id === "239903607250485249"){
                                        if(message.content.startsWith(prefix + "autochannelid")) {
                                            // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
                                            let newPrefix = message.content.split(" ").slice(1, 2)[0];
                                            // change the configuration in memory
                                            config.autochannelid = newPrefix;
                                          
                                            // Now we have to save the file.
                                            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
                                            var embed = new Discord.RichEmbed();
                                            embed.setColor('BLUE');
                                            embed.setDescription('Auto channel ID has been set to ' + config.autochannelid)
                                            message.channel.send({embed});
                                          }}
        
                                        })
                                
        
                                        bot.on('message', message => {
                                            var guild = message.guild;
                                            var author = message.author;
                                            var args = message.content.split(' '); var d = " "; for(var i = 1; i < args.length; i++){ d = d+" "+args[i]; }
                                            if (message.content.startsWith(prefix + 'play')) { 
                                                var embed = new Discord.RichEmbed();
                                                if (message.author.bot) return;
                                                embed.setTitle('Music')
                                                embed.setColor(message.member.highestRole.color);
                                                embed.setDescription('Guild Name : ' + guild.name + '\nGuild ID : ' + guild.id + '\nMessage Author : ' + message.author.username + '#' + message.author.discriminator + '\nMessage Author ID : ' + message.author.id + '\nMessage Author Role : ' + message.member.highestRole.name + '\nGuild Owner : ' + guild.owner.user.username + '#' + guild.owner.user.discriminator + '\nGuild Channel : ' + message.channel.name + '\nGuild Members : ' + guild.memberCount + '\nSong : ' + d)
                                                bot.channels.get('344719772812050433').send({embed});
                                            }
                                        })
                                        
                                        var cleverbot = require("cleverbot.io");
                                        var talkbot = new cleverbot(process.env.USERAPI,process.env.KEYAPI);
                                        
                                        
                                        bot.on('message', message => {
                                            if(message.channel.name !== "abusecleverbot") return  
                                            if(message.author.bot) return;
                                            talkbot.ask(message.content, function (err, response) {
                                            message.channel.send(response); 
                                          });
                                        
                                        });
                               

bot.login(process.env.BOT_TOKEN)







const { Client, Util } = require('discord.js');

const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');

const YouTube = require('simple-youtube-api');

const ytdl = require('ytdl-core');



const client = new Client({ disableEveryone: true });



const youtube = new YouTube(GOOGLE_API_KEY);



const queue = new Map();



client.on('warn', console.warn);



client.on('error', console.error);



client.on('ready', () => console.log('Yo this ready!'));



client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));



client.on('reconnecting', () => console.log('I am reconnecting now!'));


client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;

	if (!msg.content.startsWith(PREFIX)) return undefined;



	const args = msg.content.split(' ');

	const searchString = args.slice(1).join(' ');

	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';

	const serverQueue = queue.get(msg.guild.id);



	let command = msg.content.toLowerCase().split(" ")[0];

	command = command.slice(PREFIX.length)

	if (command === `play`) {
    
		const voiceChannel = msg.member.voiceChannel;
        
		if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');

		const permissions = voiceChannel.permissionsFor(msg.client.user);

		if (!permissions.has('CONNECT')) {

			return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');

		}

		if (!permissions.has('SPEAK')) {

			return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');

		}



		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);

			const videos = await playlist.getVideos();

			for (const video of Object.values(videos)) {

				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop

				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop

			}

			return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);

		} else {

			try {

				var video = await youtube.getVideo(url);

			} catch (error) {

				try {

					var videos = await youtube.searchVideos(searchString, 10);

					let index = 0;

					msg.channel.send(`

__**Song selection:**__



${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}



Please provide a value to select one of the search results ranging from 1-10.

					`);

					// eslint-disable-next-line max-depth

					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {

							maxMatches: 1,

							time: 10000,

							errors: ['time']

						});

					} catch (err) {

						console.error(err);

						return msg.channel.send('No or invalid value entered, cancelling video selection.');

					}

					const videoIndex = parseInt(response.first().content);

					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);

				} catch (err) {

					console.error(err);

					return msg.channel.send('🆘 I could not obtain any search results.');

				}

			}

			return handleVideo(video, msg, voiceChannel);

		}
    
	} else if (command === `skip`) {

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');

		if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');

		serverQueue.connection.dispatcher.end('Skip command has been used!');

		return undefined;

	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');

		if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');

		serverQueue.songs = [];

		serverQueue.connection.dispatcher.end('Stop command has been used!');

		return undefined;

	} else if (command === `volume`) {

		if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');

		if (!serverQueue) return msg.channel.send('There is nothing playing.');

		if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);

		serverQueue.volume = args[1];

		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);

		return msg.channel.send(`I set the volume to: **${args[1]}**`);

	} else if (command === `np`) {

		if (!serverQueue) return msg.channel.send('There is nothing playing.');

		return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);

	} else if (command === `queue`) {

		if (!serverQueue) return msg.channel.send('There is nothing playing.');

		return msg.channel.send(`

__**Song queue:**__



${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}



**Now playing:** ${serverQueue.songs[0].title}

		`);

	} else if (command === `pause`) {

		if (serverQueue && serverQueue.playing) {

			serverQueue.playing = false;

			serverQueue.connection.dispatcher.pause();

			return msg.channel.send('⏸ Paused the music for you!');

		}

		return msg.channel.send('There is nothing playing.');

	} else if (command === `resume`) {

		if (serverQueue && !serverQueue.playing) {

			serverQueue.playing = true;

			serverQueue.connection.dispatcher.resume();

			return msg.channel.send('▶ Resumed the music for you!');

		}

		return msg.channel.send('There is nothing playing.');

	}



	return undefined;

});


async function handleVideo(video, msg, voiceChannel, playlist = false) {

	const serverQueue = queue.get(msg.guild.id);

	console.log(video);

	const song = {

		id: video.id,

		title: Util.escapeMarkdown(video.title),

		url: `https://www.youtube.com/watch?v=${video.id}`

	};

	if (!serverQueue) {

		const queueConstruct = {

			textChannel: msg.channel,

			voiceChannel: voiceChannel,

			connection: null,

			songs: [],

			volume: 5,

			playing: true

		};

		queue.set(msg.guild.id, queueConstruct);



		queueConstruct.songs.push(song);



		try {

			var connection = await voiceChannel.join();

			queueConstruct.connection = connection;

			play(msg.guild, queueConstruct.songs[0]);

		} catch (error) {

			console.error(`I could not join the voice channel: ${error}`);

			queue.delete(msg.guild.id);

			return msg.channel.send(`I could not join the voice channel: ${error}`);

		}

	} else {

		serverQueue.songs.push(song);

		console.log(serverQueue.songs);

		if (playlist) return undefined;

		else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);

	}

	return undefined;

}



function play(guild, song) {

	const serverQueue = queue.get(guild.id);



	if (!song) {

		serverQueue.voiceChannel.leave();

		queue.delete(guild.id);

		return;

	}

	console.log(serverQueue.songs);



	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))

		.on('end', reason => {

			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');

			else console.log(reason);

			serverQueue.songs.shift();

			play(guild, serverQueue.songs[0]);

		})

		.on('error', error => console.error(error));

	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);



	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);

}



client.login(TOKEN);
