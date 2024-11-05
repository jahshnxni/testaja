const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/.planclue/i.test(m.quoted.text)) return !0
  this.whatplanet = this.whatplanet ? this.whatplanet : {}
  if (!(id in this.whatplanet)) return m.reply('The matter has ended.')
  if (m.quoted.id == this.whatplanet[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.whatplanet[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.data.title.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.whatplanet[id][2]
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`*Correct!*\n+${this.whatplanet[id][2]} XP\n+1 Tiketcoin`)
      clearTimeout(this.whatplanet[id][3])
      delete this.whatplanet[id]
    } else if (similarity(m.text.toLowerCase(), json.data.title.toLowerCase().trim()) >= threshold) m.reply(`*Approaching!*`)
    else m.reply(`*Wrong!*`)
  }
  return !0
}
handler.exp = 0
module.exports = handler