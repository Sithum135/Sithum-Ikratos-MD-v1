// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • Xtreshe (Beban)
// • Dll

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Karachi').format('HH')
    let wibm = moment.tz('Asia/Karachi').format('mm')
    let wibs = moment.tz('Asia/Karachi').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// if you don't have it, type "-" or leave it alone so that there are credits :v
global.sig = 'NO' //Link Instagrammu
global.sgh = 'NO' //Link Githubmu
global.sgc = 'NO'
global.sdc = '-' //Fill it out using the Discord link, if there is one, just leave it
global.snh = 'NO' //Hmmm, This is up to you to fill in :v

/*============== PAYMENT ==============*/
global.pdana = '94757182131' //Nomor Danamu
global.ppulsa = '94757182131' //Nomor SimCard Yang Kamu Pake
global.psaweria = 'https://saweria.com/XiaoYan021' //Link Saweriamu Kalo Nggada Ketik - aja

/*============== NOMOR ==============*/
global.nomorbot = '94757182131' //Nomor Bot
global.nomorown = '94757182131' //Nomor Owner
global.namebot = 'Ikratos-MD' //Nama Bot
global.nameown = 'SITHUM' // Nama Owner


/*============== CHATGPT ==============*/
global.openAiapi = 'PASTE_YOUR_API_HERE'   // Get you Api-key from 'https://platform.openai.com/account/api-keys'
global.org = 'PASTE_YOUR_ORG_HERE'   // Get you Org-Key from 'https://platform.openai.com/account/org-settings' 

/*============== STAFF ==============*/
global.owner = [
  ['923470027813', 'ᴀʜᴍᴀᴅ ᴀʟɪ🎐', true] //don't change this name and number
  ['19293514545', 'ᴀʜᴍᴀᴅ ᴀʟɪ🎐', false] //Replace your name and number here
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = ['923470027813',''] //Don't replace this,If you want to add someone add any dev
global.prems = [] // Premium user is not here to add it, type .addprem @ user 10

global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.lolkeysapi = ['BrunoSobrino']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
global.cricket_URL = 'https://m.cricbuzz.com/live-cricket-scores/56782/pak-vs-nz-new-zealand-tour-of-pakistan-2023' //paste new live match url here
/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  zenz: 'https://zenzapi.xyz',
  males : 'https://malesin.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zenzapi.xyz': '01ABEB1E11',
  'https://violetics.pw': 'beta',
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
// The word APIKEY is filled with your own apikey, by buying it on the website

/*============== WATERMARK ==============*/
global.wm = '「 ɪᴋʀᴀᴛᴏs-ᴍᴅ- 」' //Main Watermark
global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘Sithum- ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'
global.wm3 = 'ɪᴋʀᴀᴛᴏs-ᴍᴅ-'
global.footerTXT = `ɪᴋʀᴀᴛᴏs-ᴍᴅ-• ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: +92 347 0027813`
global.fig = `NO`
global.botdate = `⫹⫺ Date: ${week} ${date}`
global.bottime = `Time : ${wktuwib}`
global.titlebot = '🎋 ┊ ɪᴋʀᴀᴛᴏs ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ'
global.author = global.wm
global.logo = 'data:image/jpeg;base64,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'



/*============== LOGO ==============*/
global.thumb = 'https://i.ibb.co/cc8jfkX/01.jpg' //Main Thumbnail
global.thumb2 = 'https://i.ibb.co/cc8jfkX/01.jpg'
global.thumbbc = 'https://i.ibb.co/cc8jfkX/01.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumblvlup = 'https://i.ibb.co/cc8jfkX/01.jpg'
global.hwaifu = ['https://i.ibb.co/cc8jfkX/01.jpg']

/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+94757182131'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://i.ibb.co/cc8jfkX/01.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '5644' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊🇵🇰' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *ღ 𝘿𝘼𝙎𝙃𝘽𝙊𝘼𝙍𝘿 ღ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊☯︎'                            //body
global.cmenuf = '┗━═┅═━––––––๑\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = 'x_ikratos_x'
global.stickauth = `「 ɪᴋʀᴀᴛᴏs-ᴍᴅ- 」`
global.packname = 'Cʀᴇᴀᴛᴇᴅ Bʏ'
global.packname2 = 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɪᴋʀᴀᴛᴏs'

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
