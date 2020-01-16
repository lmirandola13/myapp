const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong')
  }
})

client.on('guildMemberAdd', member => {
  member.send(
    `Welcome to Pimpus City, please make an introduction at #citizen-registration`
  )
})

client.on('message', message => {
  if (message.content.startsWith('!kick')) {
    const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `Who.?`
      )
    }

    if (!member.kickable) {
      return message.reply(`${member.user.tag} was kicked.`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`${member.user.tag} was kicked.`))
  }
})
client.login('NjY3MTgzMzU1MjkyMjg2OTg2.Xh_Bhg.wk6I1Db0CcmlWi81mYmku3hOAxI')