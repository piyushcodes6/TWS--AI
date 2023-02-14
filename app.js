const express = require("express");
const app = express();
const { Telegraf } = require('telegraf');
const bot = new Telegraf("BOT TOKEN");

app.use(express.json())

app.post("/webhook", (req, res) => {
    const symbol = req.body.symbol;

    const price = req.body.price;

    const msg = `Hi My Name is ${symbol} and my age is ${price}`
    console.log(msg);
    bot.telegram.sendMessage('Chat_id', msg)
        .then((res) => {
            console.log('Message sent successfully:', res);
        })
        .catch((err) => {
            console.log('Error sending message:', err);
        });
    res.json({
        message: "Post created..."
    });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
