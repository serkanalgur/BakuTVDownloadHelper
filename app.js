/**
 * Baku TV Download Helper
 *
 * @package 1.0.0
 *
 * @author Serkan Algur
 */


const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('bakutv', (ctx) => ctx.reply('Hello'))
bot.command('help', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()