const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

const id = 506986375;

bot.start( (ctx) => {
    const user = ctx.update.message.from;

    if( user.id === id ) {
        ctx.reply('Ao seu dispor mestre!')
    } else {
        ctx.reply('Eu só obedeço ao meu mestre!')
    }
})

bot.startPolling();