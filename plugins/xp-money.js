let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') return m.reply('User does not exist in the database')
    m.reply(`${global.db.data.users[who].money} total`)
  }
  handler.help = ['money']
  handler.tags = ['xp']
  handler.command = ['money', 'uang']
  module.exports = handler
  