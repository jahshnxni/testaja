module.exports = {
  async all(m) {
    if (!m.isGroup) return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired) return !0
    if (+new Date() > chats.expired) {
      await m.reply('The active rental period in this group has expired, the bot will leave the group, if you want to rent again, please contact the Owner.')
      chats.expired = 0
      this.sendContact(m.chat, [{ name: 'Owner', number: global.owner, about: 'Owner & Creator' }], m, { org: 'StarVX Store', website: 'https://chat.whatsapp.com/HFehIHEBodM6Zzyr6WMOr8', email: 'starvxstore@gmail.com' })
      await this.delay(10000)
      await this.groupLeave(m.chat)
    }
  },
}