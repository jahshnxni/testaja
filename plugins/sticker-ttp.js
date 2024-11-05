let handler = async (m, {
  usedPrefix,
  command,
  text,
  env
}) => {
  if (!text) return conn.reply(m.chat, Func.example(usedPrefix, command, 'Starvx bot'), m)
  if (text.length > 10) return m.reply(Func.texted('bold', '🚩 Max 10 letters'))
  try {
    m.react('🕒')
    let json = await Func.fetchJson(API('alya', '/api/ttp', { q: text }, 'apikey'))
    conn.sendSticker(m.chat, json.data.url, m, {
      packname: global.set.packname,
      author: global.set.author,
    })
  } catch (e) {
    console.log(e)
    return m.reply(Func.jsonFormat(e))
  }
};
handler.help = handler.command = ['ttp']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler