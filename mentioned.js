const answers = [
  'XXX :)',
  'XXX :D',
  'XXX .-.',
  'XXX ;)',
  'XXX ;-)',
  'XXX Kappa',
  'XXX kkkkkk',
  'XXX kkkk',
  'XXX kk',
  'XXX KappaPride KappaPride KappaPride',
  'XXX :0',
  'XXX :o',
  'XXX SeriousSloth',
  'XXX bleedPurple',
  'XXX bleedPurple bleedPurple',
  'XXX bleedPurple bleedPurple bleedPurple',
  'XXX <3',
  'XXX <3 <3',
  'XXX <3 <3 <3',
  'XXX SeemsGood',
  'XXX TheIlluminati',
  'XXX SabaPing',
  'XXX HeyGuys',
]

const answer = (username) => {
  const answer = answers[Math.floor(Math.random()*answers.length)]
  return answer.replace('XXX', `@${username}`)
}

module.exports = ({ myUsername, mod, subscriber, username, message, sendMessage }) => {
  console.log(myUsername, username)
  if(message.includes(myUsername)) {
    console.log(2)
    sendMessage(answer(username))
  }
}