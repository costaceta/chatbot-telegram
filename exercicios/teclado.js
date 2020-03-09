const env = require("../.env");
const Telegraf = require("telegraf");
const Markup = require("telegraf/markup");

const bot = new Telegraf(env.token);

const tecladoCarne = Markup.keyboard([
  ["Cis teste", "Cis teste1", "Cis teste2"],
  ["Cis teste3", "Cis teste4"],
  ["Cis teste5", "Cis teste6"]
])
  .resize()
  .extra();

bot.start(async ctx => {
  await ctx.reply(`Seja bem-vindo ${ctx.update.message.from.first_name}`);
  await ctx.reply(
    `Gostaria de saber mais sobre o método Cis?`,
    Markup.keyboard(["Coca", "Pepsi"])
      .oneTime()
      .extra()
  );
});

bot.hears(["Coca", "Pepsi"], async ctx => {
  await ctx.reply(`$Nossa! Eu também gosto de ${ctx.match}`);
  await ctx.reply(`Qual a sua carne predileta`, tecladoCarne);
});

bot.hears("Cis teste", ctx => ctx.reply("Legal eu gosto dessa também!"));
bot.hears("Cis teste1", ctx => ctx.reply("Muito bom esse é o meu preferido!"));
bot.on("text", ctx => ctx.reply("Legal!"));

bot.startPolling();
