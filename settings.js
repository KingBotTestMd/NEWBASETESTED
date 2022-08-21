const fs = require('fs')
const chalk = require('chalk')

//Api Website
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?
}



//You Can Customize That Settings

//Your Number
global.owner = ['94787166875']
global.premium = ['94787166875']
global.ownernomer = '94787166875'
//Your Name
global.ownername = 'ШHłТΞ HΛϾКΞЯS'
//Your Bot Name
global.botname = '[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]'
//You Can Type -> default
//Or Type Your Alive Massage Here
global.alivemsg = `default`
global.alivepic = 'https://telegra.ph/file/a834f7241132ff06f6474.jpg'
//You Can Type On -> true | Off -> false
global.reactall = 'false'
global.reactchat = 'true'
global.autobio = 'true'
//You Can Set Group Rules
global.grouprules = `❌ Group Rules Are Not Setted !!!`
//You Can Change That Settings After Deployed Your Bot
//Using .setmenu Command















//Don't Change That Settings👇👇👇
global.ig = 'https://github.com/KING-BOT-OFFICIAL'
global.sc = 'https://github.com/KING-BOT-OFFICIAL/KING-BOT-MD'
global.myweb = 'https://youtube.com/channel/UCgwWV1Cya4_gUFKYOQYQtHw'
global.packname = '[🇱🇰𝚱𝚰𝚴Ｇ 𝛃𝚯𝚪🤘]'
global.author = 'ШHłТΞ HΛϾКΞЯS'
global.sessionName = 'session'
global.region = 'Sri Lanka'
global.reactmoji = '🎭'
global.prefa = ['','!','.','🇱🇰','⚙️','🤘']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: '⏳ ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ᴍᴏᴍᴇɴᴛ...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./src/logo.jpeg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
