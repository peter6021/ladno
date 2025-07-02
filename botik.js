require('dotenv').config();
const { Bot, GrammyError, HttpError, Keyboard } = require('grammy');

const bot = new Bot('7554404674:AAHNEf8xXFSSKrPWlSq8eK7vYJh53WHNoaE');
const moodKeyboard = new Keyboard()

.text('камень')
.row()
.text('ножницы')
.row()
.text('бумага')
// .row()
// .text('посмотреть статистику')
.resized();

// const vin = 0;
// const nich = 0;
// const gg = 0;

// bot.hears('посмотреть статистику', (ctx) => {
//   const got ='победы:' + vin + 'ничьи: ' + nich + 'поражения: ' + gg;
//   ctx.reply(got);
// });
bot.command('start', async (ctx) => {  ctx.reply('давай сыграм в игру "камень, ножницы, бумага!"', {
reply_markup: moodKeyboard,
});
});
bot.command('start',(ctx) => {
    ctx.reply('давай сыграм в игру "камень, ножницы, бумага!"');
    ctx.reply('выберете:"камень,ножницы,бумага!"');
});
bot.on("message", (ctx) => {
    const message = ctx.message.text;
    const random = Math.floor(Math.random() * 4);
    console.log(random);
    if(message == "камень" || message == "ножницы" || message == "бумага"){
         if(random == 1){
            ctx.reply("ты победил!");
            // const vin = vin + 1;
         }else if(random == 2){
            ctx.reply("ничья");
            // const nich = nich + 1;
         }else if(random == 3 || random == 4){
        ctx.reply("вы проиграли");
        // const gg = gg + 1;
         };
    }else{
      ctx.reply("ошибка! введите корректный ответ:камень,ножницы,бумага!");
    };
});


bot.start();
