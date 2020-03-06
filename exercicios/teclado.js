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
    Markup.keyboard(["Sim", "Não"])
      .oneTime()
      .extra()
  );
});

bot.hears(["Sim", "Não"], async ctx => {
  console.log(ctx.match);
  if (ctx.math == "Sim") {
    await ctx.reply(`Muito bom!`);
  }
});

bot.hears("Peixe", async ctx => {
  await ctx.reply("Você é um: 🐟");
});

bot.startPolling();
