let handler = async m => {
  teks = `
Name : StarVX-Bot
Version : v1.0`
  conn.sendMessageModify(m.chat, teks, m, {
    title: 'StarVX - Bot',
    body: 'hi everybody',
    largeThumb: true,
    url: 'https://chat.whatsapp.com/HFehIHEBodM6Zzyr6WMOr8'
  })
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = ['sc', 'sourcecode']
module.exports = handler