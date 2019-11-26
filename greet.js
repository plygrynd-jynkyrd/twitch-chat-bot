const greeteds = []
let hasToSay = false

setInterval(() => {
  hasToSay = true
}, 30000)

const greetings = [
  'oie! XXX',
  'oie XXX',
  'oi XXX',
  'oii XXX',
  'HeyGuys HeyGuys XXX',
  'XXX HeyGuys HeyGuys',
  'XXX LUL',
  'XXX LUL LUL',
  'XXX o q?',
  'XXX o que?',
  'XXX que?',
  'XXX q??',
  'XXX sim kk',
  'XXX né',
  'XXX psée ',
  'salve XXX!',
  'salv XXX!',
  'salvee XXX!',
  'salvee XXX',
  'salveee XXX',
  'XXX ??',
  'XXX eita!',
  'XXX vish!',
  'XXX o q foi?',
  'XXX o que foi?',
  'XXX o que foi',
  'XXX kkkkk',
  'XXX kkkk',
  'XXX kkk',
  'XXX kk',
  'XXX k'
]

const greet = (username) => {
  const greeting = greetings[Math.floor(Math.random()*greetings.length)]
  return greeting.replace('XXX', `@${username}`)
}

module.exports =  ({ myUsername,  mod, subscriber, username, message, sendMessage }) => {
  
  if(!greeteds.includes(username) && hasToSay && username != myUsername) {
    sendMessage(greet(username))
    
    greeteds.push(username)
    hasToSay = false
  }

}