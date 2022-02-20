const Pnky = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const DEL_DESC = "Deletes replied message! (owner command)"

Pnky.addCommand({pattern: 'del', fromMe: false, desc: DEL_DESC}, (async (message, match) => {
  await message.reply_message.delete();
}));
