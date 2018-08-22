const botconfig = require("./botconfig.json");
const Discord = require("./node_modules/discord.js");

const bot = new Discord.Client({
  disableEveryone: true
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`);
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1,2,3);

  if (cmd === `${"botconfig.prefix"}hello`) {
    return message.channel.send("Hello!");
  }
})

bot.login(botconfig.token);
