const env = require('../../.env')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const bot = new Telegraf(env.token)

let lista = []

const gerarBotoes = () => Extra.markup(
    Markup.inlineKeyboard(
        lista.map( item => Markup.callbackButton(item, `delete ${item}`) ),
        { columns: 3 }
    )
)

bot.start( async ctx => {
    const name = ctx.update.message.from.first_name;

    await ctx.reply(`Seja bem-vindo ${name}!`)
    await ctx.reply(`Escreva os itens que vc deseja adicionar...`)
})

bot.on('text', ctx => {
    lista.push(ctx.update.message.text);
    ctx.reply(`A mensagem ${ctx.update.message.text} foi adicionada!`, gerarBotoes())
})

bot.action( /delete (.+)/, ctx => {
    lista = lista.filter( item => item !== ctx.match[1] )
    ctx.reply(`Item ${ctx.match[1]} foi deletado!`, gerarBotoes())
})

bot.startPolling()