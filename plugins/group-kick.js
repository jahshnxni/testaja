const handler = async (m, { conn, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(`✳️ ${mssg.useCmd}\n\n*${usedPrefix + command}* @tag`) 
    const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (conn.user.jid.includes(user)) return m.reply(`✳️ Saya tidak bisa melakukan auto kick`)

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove').then(m.reply(`Succes Kicked ` + [user]))
}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
