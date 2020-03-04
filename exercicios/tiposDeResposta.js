const env = require('../.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start( async ctx => {
    const first_name = ctx.update.message.from.first_name;
    await ctx.reply(`Seja bem vindo, ${first_name}! 😃`);
    // await ctx.replyWithHTML( `Destacando mensagem
    //                           <b>bold</b>, <strong>bold</strong>
    //                           <i>italic</i>, <em>italic</em>
    //                           <u>underline</u>, <ins>underline</ins>
    //                           <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
    //                           <b>bold <i>italic bold <s>italic bold strikethrough</s> <u>underline italic bold</u></i> bold</b>
    //                           <a href="http://www.example.com/">inline URL</a>
    //                           <a href="tg://user?id=123456789">inline mention of a user</a>
    //                           <code>inline fixed-width code</code>
    //                           <pre>pre-formatted fixed-width code block</pre>
    //                           <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>` );

    await ctx.replyWithMarkdown(`*bold text*
                                _italic text_
                                [inline URL](http://www.example.com/)
                                [inline mention of a user](tg://user?id=123456789) `);
    await ctx.replyWithPhoto( { source: `${__dirname}/febra.jpg`}, { caption: 'Teste de titulo' } )
    await ctx.replyWithLocation( -3.740629, -38.480284 );
})

bot.startPolling();
