const fs = require('fs')

global.namabot = "BOTZ - RESDI"
global.namaowner = "RESDIXD"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6282375197753']
global.pairingNumber = ""
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `Qris All Pay
Ovo
Dana
Gopay

Mau ganti payment? ketik .setpay
`
//menu bot rapihin sendiri ya, belajar lah jadi anak mandiri.
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*
𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝙎𝙄𝙊𝙉 𝙊𝙒𝙉𝙀𝙍
\`\`\`» /owner
------------------------------------------
*HAI SAYA BOT RESDI*
𝘈𝘋𝘈 𝘠𝘈𝘕𝘎 𝘚𝘈𝘠𝘈 𝘉𝘈𝘕𝘛𝘜?
» /setproses
» /changeproses
» /delsetproses
» /setdone
» /changedone
» /delsetdone
» /proses
» /done
» /welcome
» /goodbye
» /setwelcome
» /changewelcome
» /delsetwelcome
» /setleft
» /changeleft
» /delsetleft
» /antiwame
» /antiwame2
» /antilink
» /antilink2
» /open
» /close
» /hidetag
» /add
» /kick
» /stiker
» /ffid
» /mlid
» /setppgc
» /setnamegc
» /setdesgc
» /linkgc
» /resetlinkgc
» /promote
» /demote
» /setbot
» /updatesetbot
» /delsetbot
» /bot
𝙸𝙽𝙵𝙾𝙼𝙰𝚂𝙸𝙾𝙽:
 𝙱𝙾𝚃 𝙸𝙽𝙸 𝙼𝙴𝙽𝙹𝙰𝙶𝙰 𝙶𝚁𝚄𝙿 𝙰𝙼𝙰𝙽
 𝙽𝙾𝚃𝙴:
 𝙱𝙾𝚃 𝚃𝙴𝚁 𝙰𝙼𝙰𝙽 𝙳𝙰𝚁𝙸 𝙱𝙾𝙱𝙾𝙻 𝙶𝚁𝚄𝙿 𝙺𝙰𝙼𝚄!
\`\`\`

📝 *NOTE*: 
Fitur nya bisa dipakai dengan atau
tanpa prefix (simbol awalan). Sebagai contoh 
fitur .owner (prefix)
dan bisa juga owner (tanpa prefix)
`
}