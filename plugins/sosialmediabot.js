let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'sosial media bot')).buffer(), `
*━━━━▣━━◤SOSIAL MEDIA BOT◢━━▣━━━━━*
=> yt: ${namayt}
=> Ig: ${namaig}

_jangan lupa bantu subscribe dan follo Ig ku_ 🙏
`.trim(), '© bagus ganz', 'oke', 'ok')
handler.help = ['sosmediabot', 'sosialmediabot', 'mediabot']
handler.tags = ['info']
handler.command = /^(sosmediabot|sosialmediabot|mediabot)$/i

module.exports = handler