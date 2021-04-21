const charRange = (start, end) => {
  const output = []
  
  for (let i = start; i <= end; i++) {
    output.push(String.fromCharCode(i))
  }
  
  return output
}

const lowercaseLetters = () => {
  // a: 97
  // z: 122
  return charRange(97, 122)
}

const uppercaseLetters = () => {
  // A: 65
  // Z: 90
  return charRange(65, 90)
}
const numbers = () => {
  // 0: 48
  // 9: 57
  return charRange(48, 57)
}

const getAllChars = () => {
  return lowercaseLetters().concat(uppercaseLetters()).concat(numbers())
}

const generateAccountKey = () => {
  let output = ''
  
  const chars = getAllChars()
  for (let i = 0; i <= 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    output += chars[randomIndex]
  }

  return output
}

module.exports = generateAccountKey