const autoReply = (msg) => {
    let R = ''
    if(msg.match(/hi|hey|hello|halo/gi)){
        R = "🤓Hey, I am aqua👽"
    }
    if(msg.match(/😒/gi)){
        R = "😒mok"
    }
    if(msg.match(/🥲/gi)){
        R = "🥲💔"
    }
    if(msg.match(/aqua|karim|walid/gi)){
        R = "🤭mok🤫😂"
    }
    if(msg.match(/yeaaah/gi)){
        R = "😒khask zab?💔"
    }
    if(msg.match(/zaba/gi)){
        R = "zabaltarma?"
    }
    if(msg.match(/dodi /gi)){
        R = "😌dodi gay"
    }
    if(msg.match(/bilal/gi)){
        R = "😌respect for chaykh..."
    }
    if(msg.match(/bot/gi)){
        R = "😏wax khsk?"
    }
    if(msg.match(/😁/gi)){
        R = "sendSticker:hii"
    }
    if(msg.match(/rayan/gi)){
        R = "gay"
    }
    if(msg.match(/li|xkon|kawd|who|kwd/gi)){
        R = "😎li hwak💀"
    }
    if(msg.match(/tafi/gi)){
        R = "😂mok"
    }
    if(msg.match(/mn/gi)){
        R = "😝mlk tswl"
    }
    if(msg.match(/gm|morning/gi)){
        R = `🎤zabi🌸 fi😊 yassine🌄 dodi🙏gay...😃`
    }
    if(msg.match(/😂/gi)){
        R = `mok😒 raha 9hba👀`
    }
    if(msg.match(/gn|night/gi)){
        R = "🌚tsbah 3la khir👻👻"
    }
	if(msg.match(/mat9ob|hbltna/gi)){
        R = "🤫sahbi skt xwiya."
    }
    if(msg.match(/konosuba/gi)){
        R = "☺️❤️"
    }
    if(msg.match(/zamlbok/gi)){
        R = "😏yassine"
    }
    if(msg.match(/omar/gi)){
        R = "goat"
    }
    if(msg.match(/telegram/gi)){
        R = "zabi😌\ll"
    }
    if(msg.match(/humiltion/gi)){
        R = "sendSticker:phonehate"
    }
    if(msg.match(/hehe|he he|hhhhh/gi)){
        R = "sendSticker:hehe"
    }
    if(msg.match(/❤️/gi)){
        R = "sendSticker:heart"
    }
    if(msg.match(/😒|hm/gi)){
        R = "sendSticker:hmm"
    }
    if(msg.match(/amo|ammo/gi)){
        R = "sendSticker:amo"
    }
    if(msg.match(/🤣/gi)){
        R = "sendSticker:smile"
    }
    if(msg.match(/mk/gi)){
        R = "khtk"
    }
    if(msg.match(/🙂/gi)){
        R = "🙂"
    }
    return R
}
const autoReply2 = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "sendAudio:110"
    }
    if(msg.match(/xgfcj/gi)){
        R = "sendAudio:111"
    }
    if(msg.match(/🤣|😂😂/gi)){
        R = "sendAudio:112"
    }
    if(msg.match(/😒|l9wada/gi)){
        R = "sendAudio:113"
    }
    if(msg.match(/hayhay/gi)){
        R = "sendAudio:114"
    }
    if(msg.match(/aaw|halo|manika|lamayo|😘|😍|❤️|love|adare/gi)){
        R = "sendAudio:115"
    }
    if(msg.match(/nchalah/gi)){
        R = "sendAudio:116"
    }
    return R
}
const autoReply3 = (msg) => {
    let R = ''
    return R
}
module.exports = {
    autoReply,
    autoReply2,
    autoReply3,
    copyright:"Kumuthu Prabhasha"
}
