let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch(image + '')).buffer(), `
yu join group ku 
Linkgc: 
GC1 ASTRO BOT: ${gc1}


GC2 ELAINA BOT: ${gc2}

Link bitly: https://bit.ly/3EUeXwA
kalo loh ngebot join silahkan
🤖📁
`.trim(), footer, 'MENU BOT', '.menu', 'OWNER BOT', '.owner')
handler.help = ['gcbot', 'groupbot']
handler.tags = ['info']
handler.command = /^gcbot|groupbot$/i

module.exports = handler