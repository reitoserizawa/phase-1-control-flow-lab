function scuberGreetingForFeet(someNumber){
  // Write your code here!
  let result
  if (someNumber <= 400 ) {
    result = 'This one is on me!'
  } else if (someNumber < 2000) {
    result = 'That will be twenty bucks.'
  } else if (someNumber < 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (someNumber > 2500) {
    result = 'No can do.'}
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
  let result
  city === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.'
  return result
}

function switchOnCharmFromTip(tip){
  // Write your code here!
let result

switch (tip) {
  case 'generous' : 
    return result = 'Thank you so much.'
    break
  case 'not as generous' : 
    return result = "Thank you."
    break
  default:
    return result = 'Bye.'
return result
}
}