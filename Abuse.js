const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '-'
var pluger = 0

bot.on('message', message => { if (message.content.toLowerCase() === prefix + 'bradgamezshutdown')         if (message.author.id == '335893092756488205') { process.exit(); } else { message.channel.send(message.author + ' You Dont Have Perms To Use This Command!') } });



bot.on('message', (message) =>{
    let guild = message.guild
    
    if(message.content.toLowerCase() == prefix + "hello"){
        message.reply(' Hello hope your having a **Nice Day**.It took **' + Math.round(bot.ping) + 'ms** to get to you.');
    }
    if(message.content.toLowerCase() == prefix + "roll"){
        message.channel.sendMessage(':game_die: ' + Math.floor(Math.random() * (6 - 1 + 1) + 1));
    }
    if(message.content.toLowerCase() == prefix + "invite mobile"){
        message.channel.sendMessage('BradGamez Corporation : <https://discord.gg/ZzhXzzd>\nBot Invite : <https://discordapp.com/oauth2/authorize?client_id=368486558346772480&scope=bot&permissions=8>')
    }   
    if(message.content.toLowerCase() == prefix + "invite mobile" || message.content.toLowerCase() == prefix + "invite"){
        pluger++
        bot.channels.get('371287184969433088').sendMessage(pluger);
    }   
})

bot.on('message', message => {
    var user = message.mentions.users.first(); 
    if (message.content.toLowerCase().startsWith(prefix + 'l') && user) { 
            message.channel.sendMessage(user + ' Hold This **L**');    
    }
});

bot.on('message', message => {
    let guild = message.guild
    var user = message.mentions.users.first();
    var embed = new Discord.RichEmbed();
    if (message.content.toLowerCase().startsWith(prefix + 'info') && user) { 
    embed.setAuthor(user)
    embed.addField('Discord Name & ID', user.username + '#' + user.discriminator)
    embed.addField('Account Creation Date', user.createdAt)
    embed.addField('ID', user.id)
    embed.addField('Last Message', user.lastMessageID)   
    embed.addField('Bot?', user.bot) 
    embed.setThumbnail(user.displayAvatarURL)
    embed.setColor('#02f5e1')
    message.channel.send({embed}); return;
    }});

    bot.on('message', message => {
        let guild = message.guild
        if (message.content.toLowerCase() == prefix + "serverinfo") {
            var embed = new Discord.RichEmbed();
            embed.setTitle(guild.name)
            embed.addField('Founder:', guild.owner)
            embed.addField('Founders ID', guild.ownerID)
            embed.addField('Founded on:', guild.createdAt)
            embed.addField('Region:', guild.region)
            embed.addField('Uptime:',bot.uptime)
            embed.addField('Member Count:', guild.memberCount)
            embed.addField("Bot Count", guild.members.filterArray(a => a.user.bot).length, true);            
            embed.addField('Online', guild.members.filter(m => m.presence.status === 'online').size)
            embed.addField('Offline', guild.members.filter(m => m.presence.status === 'offline').size)
            embed.setThumbnail(guild.iconURL)
            embed.addField('Channels:', guild.channels.size)
            embed.addField('Roles', guild.roles.size)
            embed.addField('Emojis', guild.emojis.size)
            embed.addField('Servers', guild.presences.size)
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
                    embed.setDescription(message.author + 'You Lived This Time... :rose:')
                    embed.setTimestamp(); 
                    message.channel.send({embed});
                } else {
                    embed.setColor('RED')
                    embed.setDescription(message.author + 'You died... :fire:')
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
                    embed.setDescription('Total Members : ' + guild.memberCount);
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
                      embed.addField('#mod-logs', 'Auto Logs')                
                      message.channel.send({embed});
                        }
                });



                bot.on('message' , message => {
                    if (message.content.toLowerCase() == prefix + 'help') {
                        var embed = new Discord.RichEmbed();
                        if (message.author.bot) return;
                        embed.setTitle('Commands');
                        embed.setColor('BLUE');
                        embed.setDescription('List Of Coammands That Abuse Can Do.');
                      embed.addBlankField();
                      embed.addField(prefix + 'hello', 'To say hello.');
                      embed.addField(prefix + 'invite (mobile)', 'Join Our Amazing Services') 
                      embed.addField(prefix + 'warn @ <reason>', 'Staff Only To Warn People');
                      embed.addField(prefix + 'kick @ <reason>','Staff Only To Kick People From Server')
                      embed.addField(prefix + 'bothelp', 'Shows what you need for Abuse')     
                      embed.addField(prefix + 'image <URL>', 'Make a picture look 10 times better')                      
                      embed.addField(prefix + 'L @', 'Shows who takes the L.');
                      embed.addField(prefix + 'info @', 'See players info')
                      embed.addField(prefix + 'serverinfo', 'Shows servers info')
                      embed.addField(prefix + 'Members', 'Shows total members')
                      embed.addField(prefix + 'say <text>', 'repeats what you say')
                      embed.addField(prefix + 'Abuse @', 'Stop the abuse')
                      embed.addField(prefix + 'Blame @', 'Blame someone')
                      embed.addField(prefix + 'rr', 'Do you live or die')
                      embed.addField(prefix + 'roll', 'Roll a dice') 
                      embed.addField(prefix + 'puppy', 'CUTEST PUPPIES EVER')                      
                      message.channel.send({embed});
                        }
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
                        embed.setDescription('[BradGamez Corporation](https://discord.gg/ZzhXzzd)\n[Bot Invite](https://discordapp.com/oauth2/authorize?client_id=368486558346772480&scope=bot&permissions=8)')
                        embed.setTimestamp()
                        message.channel.send({embed}); return;
                    }});














                    bot.on('guildMemberAdd', member => {
                        const welcome = member.guild.channels.find('name' , 'welcome')
                        const log = member.guild.channels.find('name' , 'mod-logs')                        
                        let guild = member.guild
                        var embed = new Discord.RichEmbed();
                        if (welcome && log){
                        embed.setColor('GREEN')
                        embed.setDescription('Welcome ' + member.user + ' to ' + guild.name)
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
                        embed.setDescription('GoodBye ' + member.user + ' You Will Be Missed.')
                        bot.channels.get(welcome.id).send({embed});

                        embed.setColor('RED')
                        embed.setTitle('User Left')
                        embed.setDescription(member.user + ' Has Left The Guild.')  
                        embed.setFooter('Total Members : ' + guild.memberCount)  
                        embed.setTimestamp();
                        bot.channels.get(log.id).send({embed});
                    }});

                    bot.on('message' , message => {
                        let count = 0 
                        var embed = new Discord.RichEmbed();   
                        var puppy = ["https://i.ytimg.com/vi/VRiWE1l8KqI/maxresdefault.jpg", "http://barkingroyalty.com/wp-content/uploads/2015/12/cutest-puppies.jpg", "https://i.pinimg.com/736x/c6/4c/e0/c64ce05bf01ccb3ea8af44de5980cbe4--teacup-maltipoo-maltipoo-puppies.jpg", "http://cdn3-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-15.jpg", "http://www.lifewithdogs.tv/wp-content/uploads/2014/03/3.21.14-National-Puppy-Day25.jpg"] 
                        if(message.content.toLowerCase() == prefix + "puppy"){      
                        if(count > puppy.length - 1) count = 0;                                                  
                        embed.setColor("#ffffff")
                        embed.setImage(puppy[count++])
                        message.channel.send({embed});                         
                    }
                })



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
                    if(message.content.toLowerCase() == prefix + 'bradgamezinfo'){
                        if (message.author.id == '335893092756488205'){                   
                        var embed = new Discord.RichEmbed();
                        if (message.author.bot) return;
                        embed.setColor('BLUE');
                        embed.setTitle('Abuse Info')
                         embed.addField('Number of Servers :', bot.guilds.size);
                         embed.addField('Name of Servers :', bot.guilds.map(g => g.name));
                         embed.addField('Number of Users :', bot.users.size);
                         
                      message.channel.send({embed});
                      
                    }}
                });
                    
                    bot.on('ready', () => {
                        console.log('Abuse Bot on')
                        var gamez = [bot.guilds.size + " Servers", prefix + "help || " + prefix + 'invite', bot.users.size + " Users"];
                        let count = 0;
                        function oof(){
                        if(count > gamez.length - 1) count = 0;
                        bot.user.setGame(gamez[count++]);
                        }
                        setInterval(oof, 600000);
                        });





                        

bot.login("");
