let messages = []
setInterval(() => {
  messages = []
}, 60000 * 2)

const answer = (username) => {
  const [answer] = messages.splice(Math.floor(Math.random()*messages.length), 1)

  return answer
}

let hasToSay = false

setInterval(() => {
  hasToSay = true
}, 10000)

const curse = ['burro', 'idiota', 'caralho', 'porra', 'troxa', 'puta']
const hasCurse = (message) => {
  for(let i = 0; i < curse.length; i++){
    if(message.includes(curse[i]))
      return true
  }
  return false
}

const hasTooMuchUppercase = (message) => {
  let count = 0

  for(let i = 0; i < message.length; i++){
    const char = message[i]
    if(char == char.toUpperCase()) {
      count++
    }

    if(count > 5)
     return true
  }

  return false
}

module.exports = ({ myUsername, mod, subscriber, username, message, sendMessage }) => {
  if(!message.includes('@')) {
    if(!hasCurse(message.toLowerCase()) && message.length < 40){

      //remove last space from message to be unique
      const firstSpace = message.substring(1, message.length -1).indexOf(' ')
      const lastSpace = message.substring(1, message.length -1).lastIndexOf(' ')
      let m = message
      if(hasTooMuchUppercase(m)) 
       m = m.toLowerCase()

      if(m.indexOf(' ') > 0) {
        m = m.slice(0, lastSpace + 1) + m.slice(lastSpace)
        if(firstSpace != lastSpace)
        {
          m = m.slice(0, firstSpace + 1)   + m.slice(firstSpace)
        }
      }

      

      messages.push(m)


    }
      
  }

  if(hasToSay && messages.length > 9){
    sendMessage(answer())
    hasToSay = false
  }
}