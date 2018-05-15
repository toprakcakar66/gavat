const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {
  console.log(`Bot:Başarıyla giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply("Aleyküm Selam");
  }

  if (msg.content.toLowerCase() === 'beni çek') {
    msg.reply("çektim geldi mi");
  }
});

client.login();
