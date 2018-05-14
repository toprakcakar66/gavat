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

client.login("NDAwMzIwOTA3ODI0MDcwNjU3.DdXwXQ.iwQc09BgX4WInxIo9uRMJ1qFF2U");
