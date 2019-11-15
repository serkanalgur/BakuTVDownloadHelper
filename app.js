"use strict";

/**
 * Baku TV Download Helper
 *
 * @package 1.0.0
 *
 * @author Serkan Algur
 */

const Telegraf = require("telegraf");
const request = require("request");
const cheerio = require("cheerio");
let url;

const getPage = cb => {
  request(
    url,
    {
      timeout: 3000
    },
    (error, response, body) => {
      if (!error) {
        cb(body);
      }
    }
  );
};

const parsePage = data => {
  const $ = cheerio.load(data);
  let output = $("video").attr("src");
  return output;
};

process.env.BOT_TOKEN = "YOUR_TOKEN";
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.command("bakutv", ctx => {
  let text = ctx.message.text;
  let text1 = text.replace("/bakutv ", "");
  url = "https://baku.tv/embed/" + text1;

  getPage(html => {
    let urls = parsePage(html);
    ctx.reply(urls);
  });
});
bot.command("baku", ctx => {
  let text = ctx.message.text;
  let text1 = text.replace("/baku ", "");
  url = "https://baku.tv/embed/" + text1;

  getPage(html => {
    let urls = parsePage(html);
    ctx.reply(urls);
  });
});

bot.launch();
