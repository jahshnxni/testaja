const uploadImage = require('../lib/uploadImage')
let handler = async (m, { 
  conn,
  text,
  usedPrefix,
  command
}) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendSticker(m.chat, meme, m, {
      packname: global.set.packname,
      author: global.set.author
    })
}
handler.help = ['smeme']
handler.tags = ['sticker']
handler.command = ['smeme', 'stickermeme', 'stikermeme']

handler.limit = true

module.exports = handler