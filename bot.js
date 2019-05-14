const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("576859129310609420");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('dnd');
client.user.setGame("Support Access.", "https://www.twitch.tv/idk");
  console.log("The 100. | Logged in! Server count: ${client.guilds.size}");
  //client.user.setActivity("Support Manager.",{type: 'PLAYING'});
});

client.on("message", message => {
  const loading = client.emojis.find(load => load.name === "loading2");
  const nice1 = client.emojis.find(nice => nice.name === "nice");
  if(message.guild == null)return;
  var role = message.guild.roles.find(r => r.name == "Wating for reply.");
  if(!role) return;
  var fchannel = "573785601841561600";
var schannel = message.guild.channels.find(j => j.name === "staff-support");
if(!schannel) return;
if(!fchannel) return;
  if (message.channel.id === fchannel) { 
    message.delete(100);
   message.member.addRole(role);
    schannel.send(`**\`#\` - __New Member__ Need to help,** ${loading}\n\n     **\`-\` Name :** ${message.member}\n     **\`-\` Need to :** ${message.content}  \n\n**NOTE:** \` When he discovers that a member is manipulating,\`\n                              \`you should not answer him.\` ${nice1}\n\n━━`);
    }
  });


client.on("message", message => {
   const Tr = client.emojis.find(disheart => disheart.name === "trn");
  if (message.content.startsWith(prefix + 'send')) {
    if (!message.guild.member(message.author).roles.has('576901756798369802')) return;
   // if(!message.member.hasPermission("MANAGE_GUILD")) return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2).join(" ");
var role = message.guild.roles.find(r => r.name == "Wating for replay.");
if(!user) message.channel.send(`${Tr} **Mention any member**`).then(m => m.delete(3000));
if(!args) message.channel.send(`${Tr} &&Type the message**`).then(m => m.delete(3000));
if(!user) return;
user.send(args);
user.removeRole(role).catch(console.error);
  }});

const devs = ["380307890235506698", "id number 2"]// ايدي الخاص بحسابك
 
const adminprefix = "!s";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});

client.login(process.env.BOT_TOKEN);
