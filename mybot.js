//this bot is made using the telgraf library 
//to use this script file you need to install telegraf for that purpose go to setup folder


const Telegraf = require('telegraf');

const bot = new Telegraf(''); //telegram bot api token should be typed in between the ('')

bot.start((ctx) => {
//start command
ctx.reply("welcome "+ctx.from.first_name + "  this bot is designed to provide the links for upcoming lectures");
})
//help command
bot.help((ctx) => {
    ctx.reply("you have enetered help command ");
}
)
//command function for lectures
bot.command(["subject name "],(ctx) =>{
    ctx.reply("provide details regarding the upcoming lectures with link"
    );
} )
//settinngs command
bot.settings((ctx) => {
    ctx.reply("youhave entered settings 00");
}) 
bot.hears("subject name",(ctx) =>{
    ctx.reply("provide details regarding the upcoming lectures with link"
    );
    })
    

bot.launch();
