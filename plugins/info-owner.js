let handler = async (m, {
  conn
}) => {
  conn.sendContact(m.chat, [{
    name: 'Owner',
    number: global.owner,
    about: 'Owner & Creator'
  }], m, {
    org: 'StarVX',
    website: 'https://chat.whatsapp.com/HFehIHEBodM6Zzyr6WMOr8',
    email: 'starvxstore@gmail.com'
 })
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = ['owner', 'creator']
module.exports = handler
