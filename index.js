const tmi = require('tmi.js')
var fs = require('fs')

const myUsername = ''
const password = ''
const channelName = ''

const mentioned = require('./mentioned')
const greet = require('./greet')
const repeater = require('./repeater')

const client = new tmi.Client({
	options: { debug: true },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: myUsername,
		password
	},
	channels: [ channelName ]
});

const messages = []
let messagesBetween = 0
const sendMessageX = (channel) => (message) => {
  messages.push({ message, channel })
}

setInterval(async() => {
  if(messages.length > 0 && messagesBetween > 3) {
    const { message, channel } = messages.shift()
    await client.say(channel, message)
    messagesBetween = 0
  }
}, 5000 + Math.random() * 5000)

const start = async() => {
  await client.connect();
  
  client.on('message', (channel, tags, message, self) => {
    messagesBetween++
    const sendMessage = sendMessageX(channel)
    const { mod, subscriber, username } = tags
    const params = { myUsername, mod, subscriber, username, message, client, sendMessage }
    
    if(self) {
      fs.appendFileSync('log.txt', `me: ${message}\n`)
    }

    if(mod || subscriber) return

    if(message.includes(myUsername)){
      fs.appendFileSync('log.txt', `${username}: ${message}\n`)
    }
    
    mentioned(params)
    greet(params)
     if(messages.length == 0)
       repeater(params)
  })


}

start()