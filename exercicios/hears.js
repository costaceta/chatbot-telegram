const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.hears('pizza', ctx => ctx.reply('Quero!'));
bot.hears(['gol', 'ferrari'], ctx => ctx.reply('Massa!'));
bot.hears('😀', ctx => ctx.reply('Legal 🤣!'));
bot.hears( /burguer/i, ctx => ctx.reply('Hamburguer!') )

bot.startPolling();