const env = require('../.env');
const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');

const bot = new Telegraf(env.token);

const btnLinks = Extra.markup( Markup.inlineKeyboard([
    Markup.urlButton(
        'Acesse o Portal Tem Poder Quem Age',
        'https://ava.portaltempoderquemage.com.br'
    ),
]))

const welcomeMsg = `Olá, amigo! 💙

Nosso grupo no Telegram tem o objetivo de promover a interação entre os amigos do Portal.

Aqui vocês poderão trocar experiências, comentar sobre os estudos da plataforma, compartilhar depoimentos ou comentar e responder sobre o conteúdo que colocarmos aqui.

➡️Entendemos que você está precisando entrar em contato com a equipe do Portal para solucionar uma questão, porém neste grupo nossa equipe não poderá te oferecer o melhor atendimento. Por isso, pedimos que você entre em contato com o suporte através do e-mail ✉️ 
portaltempoderquemage@febracis.com.br ou do telefone de contato 📲 (85) 3457-3204.

Forte abraço,
Equipe Portal Tem Poder Quem Age
`

bot.start( ctx => {
    const name = ctx.update.message.from.first_name;
    ctx.reply(`Seja bem vindo ${name}`)
    ctx.reply( welcomeMsg, btnLinks )
} )

bot.startPolling();