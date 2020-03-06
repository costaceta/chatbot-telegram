const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

const moment = require('moment');

bot.hears('pizza', ctx => ctx.reply('Quero!'));
bot.hears(['gol', 'ferrari'], ctx => ctx.reply('Massa!'));
bot.hears('😀', ctx => ctx.reply('Legal 🤣!'));
bot.hears( /burguer/i, ctx => ctx.reply('Hamburguer!'));
bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    moment.locale('pt-BR');
    const data = moment(ctx.match[1], 'DD/MM/YYYY');
    console.log(data);
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`);
})

bot.startPolling();