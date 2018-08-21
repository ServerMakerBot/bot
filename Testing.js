const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const ms = require(`ms`)
const config = require("./config.json");
var prefix = config.prefix1

bot.on('message', message => {
	var embed = new Discord.RichEmbed();
	if(message.author.bot) return
	if(Math.round(Date.now() - message.guild.member(message.author).joinedAt) > 31536000000) {
		if(!message.member.roles.has(`347734441801547776`)) {
	message.member.addRole(`347734441801547776`)
	}}
	if(message.content.toLowerCase() === prefix + `free credits`){
embed.setAuthor(`Free Credits`,message.author.displayAvatarURL)
embed.setColor(`#85C1E9`)
embed.setDescription(`**Do tasks this will earn you tons of credits at once.**\n**Watch advertisements for 1-5 credits.**\n**Join here and you can advertise your server as much as you like.** [Join here for advertisements](https://discord.gg/ZzhXzzd)`)
message.channel.send({embed})
}
	if(message.content.toLowerCase() === prefix + 'mydevice android') {
		message.member.addRole(`297193194439966720`)
		embed.setAuthor(`You added Android role to yourself.`, message.author.displayAvatarURL)
		embed.setColor(`#00FF00`)
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'mydevice ios') {
		message.member.addRole(`297193152421298176`)
		embed.setAuthor(`You added iOS role to yourself.`, message.author.displayAvatarURL)
		embed.setColor(`#00FF00`)
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'notmydevice android') {
		message.member.removeRole(`297193194439966720`)
		embed.setAuthor(`You removed Android role from yourself.`, message.author.displayAvatarURL)
		embed.setColor(`#ff0000`)
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'notmydevice ios') {
		message.member.removeRole(`297193152421298176`)
		embed.setAuthor(`You removed iOS role from yourself.`, message.author.displayAvatarURL)
		embed.setColor(`#ff0000`)
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'support') {
		message.channel.send('support@mcpeservermaker.com')
	}
	if(message.content.toLowerCase() === prefix + 'permission balance') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.balance`\n\n**Usage**\n`/setuperm <user> essentials.balance`\n`/setgperm <group> essentials.balance`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission break') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.break`\n\n**Usage**\n`/setuperm <user> essentials.break`\n`/setgperm <group> essentials.break`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission burn') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.burn`\n\n**Usage**\n`/setuperm <user> essentials.burn`\n`/setgperm <group> essentials.burn`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission ci' || message.content.toLowerCase() === prefix + 'permission clearinventory') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.clearinventory`\n\n**Usage**\n`/setuperm <user> essentials.clearinventory`\n`/setgperm <group> essentials.clearinventory`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission colorchat') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.colorchat`\n\n**Usage**\n`/setuperm <user> essentials.colorchat`\n`/setgperm <group> essentials.colorchat`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission afk') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.afk`\n\n**Usage**\n`/setuperm <user> essentials.afk`\n`/setgperm <group> essentials.afk`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission back') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.back`\n\n**Usage**\n`/setuperm <user> essentials.back`\n`/setgperm <group> essentials.back`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission pay') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.pay`\n\n**Usage**\n`/setuperm <user> essentials.pay`\n`/setgperm <group> essentials.pay`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission pt' || message.content.toLowerCase() === prefix + 'permission powertool') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.powertool`\n\n**Usage**\n`/setuperm <user> essentials.powertool`\n`/setgperm <group> essentials.powertool`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission pvp') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.pvp`\n\n**Usage**\n`/setuperm <user> essentials.pvp`\n`/setgperm <group> essentials.pvp`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission realname') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.realname`\n\n**Usage**\n`/setuperm <user> essentials.realname`\n`/setgperm <group> essentials.realname`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission fix' || message.content.toLowerCase() === prefix + 'permission repair') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.repair`\n\n**Usage**\n`/setuperm <user> essentials.repair`\n`/setgperm <group> essentials.repair`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission gamemode') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.gamemode`\n\n**Usage**\n`/setuperm <user> essentials.gamemode`\n`/setgperm <group> essentials.gamemode`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission kill') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.kill`\n\n**Usage**\n`/setuperm <user> essentials.kill`\n`/setgperm <group> essentials.kill`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission kit') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.kit`\n\n**Usage**\n`/setuperm <user> essentials.kit`\n`/setgperm <group> essentials.kit`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission more') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.more`\n\n**Usage**\n`/setuperm <user> essentials.more`\n`/setgperm <group> essentials.more`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission msg') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.msg`\n\n**Usage**\n`/setuperm <user> essentials.msg`\n`/setgperm <group> essentials.msg`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission mute') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.mute`\n\n**Usage**\n`/setuperm <user> essentials.mute`\n`/setgperm <group> essentials.mute`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission near') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.near`\n\n**Usage**\n`/setuperm <user> essentials.near`\n`/setgperm <group> essentials.near`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission nick') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.nick`\n\n**Usage**\n`/setuperm <user> essentials.nick`\n`/setgperm <group> essentials.nick`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission fly') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.fly`\n\n**Usage**\n`/setuperm <user> essentials.fly`\n`/setgperm <group> essentials.fly`');
		message.channel.send({embed})
	}
	if(message.content.toLowerCase() === prefix + 'permission god') {
		embed.setColor('RED');
		embed.setTitle('EssentialsPE')
		embed.setDescription('**Permission**\n`essentials.god`\n\n**Usage**\n`/setuperm <user> essentials.god`\n`/setgperm <group> essentials.god`');
		message.channel.send({embed})
	}
	
});

bot.on('message', async message => { 
    let guild = message.guild
    var embed = new Discord.RichEmbed();

    
        const args = message.content.split(" ").slice(1);
      
        if (message.content.startsWith(prefix + "eval")) {
          if(message.author.id !== "335893092756488205" && message.author.id !== `201679157124399104`) return;
          if(message.content.toLowerCase().includes('token')) {
    embed.setAuthor(`Nice try Kiddo`) 
    embed.setColor(`#ff0000`)
    message.channel.send({embed});
    return;
  }  try {
            const code = args.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            embed.setDescription(evaled, {code:"xl"});
	    embed.setAuthor("Eval", message.author.displayAvatarURL)
	    embed.setColor("#1196F4")
            message.channel.send({embed});
          } catch (err) {
	   embed.setAuthor("Error", message.author.displayAvatarURL)
           embed.setDescription(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
	   embed.setColor("#FF0000")
           message.channel.send({embed});

          }
        }
    if(message.author.bot) return;
    if(message.content.toLowerCase().includes('bug') || message.content.toLowerCase().includes('problem')|| message.content.toLowerCase().includes('issue')) {
    if(!message.content.toLowerCase() === prefix + `bug report`) {
    if(message.channel.id === `286013484670517259`) {
    embed.setAuthor(`Playmc Automatic Bug Report`,message.guild.iconURL)
    embed.setDescription(`**Google Forms Bug Report :**\n[Click this blue text.](https://goo.gl/forms/fAgKFt507istLwq82)\n\n**Emailing Support :** \nMake sure to give a well written explaination of your issue/bug.\n**Email :** __support@mcpeservermaker.com__`)
    embed.setColor(`#85C1E9`)
    message.channel.send({embed}).then(msg => msg.delete(150000))
    } else {
    message.reply(`if you are looking for support move to <#286013484670517259>`).then(m => m.delete(10000))
    }}}
  
  
let Bugname;
let des;
let file;
let emoji = message.guild.emojis.find(`name`,`servermaker`)
  
if(message.content.toLowerCase() === prefix + `bug report`) {
    
await message.channel.send("Provide a name for the bug.");
const MSG1 = await message.channel.awaitMessages(msg => {
if (msg.author.bot) return;
return msg.content.includes("");
}, {max: 1})
.then(collected => {Bugname = collected.map(msg => msg.content).join(", ")});

await message.channel.send("Describe this bug to us.");
const MSG2 = await message.channel.awaitMessages(msg => {
if (msg.author.bot) return;
return msg.content.includes("");
}, {max: 1})
.then(collected => {des = collected.map(msg => msg.content).join(", ")});
  
await message.channel.send("Provide video/photo link to photo.");
const MSG3 = await message.channel.awaitMessages(msg => {
if (msg.author.bot) return;
return msg.content.includes("http");
}, {max: 1})
.then(collected => {file = collected.map(msg => msg.content).join(", ")});
  
embed.setAuthor(`${Bugname}`,message.guild.iconURL)
embed.setDescription(`**Bug Description :**\n${des}\n\n**Video/Photo proof :**\n${file}`)
embed.setColor(`#FF0000`)
embed.setFooter(`Bug report made by ${message.author.username} | ${message.author.id}`)
bot.channels.get(`455411435435065384`).send({embed}).then(r => r.react(emoji))
}

})

bot.on(`message`, async message => {  
    let args = message.content.split(" ").slice(1);    
    var embed = new Discord.RichEmbed()
    var user = message.mentions.users.first()
    
    if(message.content.toLowerCase().startsWith(prefix + `mute`)) {
    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) {
        embed.setAuthor(`Please don't use staff commands.`, message.author.displayAvatarURL)
        embed.setColor(`#85C1E9`)
    message.channel.send({embed})
    }    
    if(message.member.hasPermission(`MANAGE_MESSAGES`)) {
      message.delete()
    if(!user) { 
    embed.setAuthor("Please tag a user.",message.author.displayAvatarURL)
    embed.setColor(`#85C1E9`)
    message.channel.send({embed});
    }

    let mutetime = args[1];
    if(!mutetime) {
      embed.setAuthor("You didn't specify a time!",message.author.displayAvatarURL);
      message.channel.send({embed})
    }

    message.guild.member(user).addRole(`297180821016805376`)
    embed.setAuthor(`You have been muted!`,user.displayAvatarURL)
    embed.setColor(`#85C1E9`)
    embed.setDescription(`You will be muted for ${ms(ms(mutetime))}`)
    message.channel.send({embed});
    


    embed.setAuthor(`Mute`,user.displayAvatarURL)
    embed.setColor(`#85C1E9`)
    embed.setDescription(`**User :** ${user.username}\n**User ID :** ${user.id}\n**Time/Reason :** ${args}`)
    bot.channels.get(`332634302388895764`).send({embed})

    setTimeout(function(){
        message.guild.member(user).removeRole(`297180821016805376`)
      message.channel.send(`<@${user.id}> has been unmuted!`);
    }, ms(mutetime));
}}


if(message.content.toLowerCase().startsWith(prefix + `unmute`)) {

    if(!message.member.hasPermission(`MANAGE_MESSAGES`)) {
        embed.setAuthor(`Nice try. :D`, message.author.displayAvatarURL)
        embed.setColor(`#85C1E9`)
    message.channel.send({embed})
    }    
    if(message.member.hasPermission(`MANAGE_MESSAGES`)) {        
    message.guild.member(user).removeRole(`297180821016805376`)
    message.channel.send(`<@${user.id}> has been unmuted!`)
    }
}
})

bot.on(`guildMemberAdd`,member=>{
var embed = new Discord.RichEmbed();
embed.setAuthor(`User joined`,member.user.displayAvatarURL)
embed.setColor(0x36393e)
embed.addField(`Username   :inbox_tray:`,`${member.user.username}#${member.user.discriminator}`)
embed.addField(`ID`,`${member.id}`)
bot.channels.get(`332634302388895764`).send({embed})
});

bot.on(`guildMemberRemove`,member=>{
var embed = new Discord.RichEmbed();
embed.setAuthor(`User left`,member.user.displayAvatarURL)
embed.setColor(0x36393e)
embed.addField(`Username   :outbox_tray:`,`${member.user.username}#${member.user.discriminator}`)
embed.addField(`ID`,`${member.id}`)
bot.channels.get(`332634302388895764`).send({embed})
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
