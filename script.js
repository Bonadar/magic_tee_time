function numName(num) {
  const digitOne = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const digitTeen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ]
  const digitTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let str = ''
  if (num < 10) str = digitOne[num]
  else if (num < 20) str = digitTeen[num % 10]
  else if (num < 100) str = digitTens[Math.floor(num / 10)] + digitOne[num % 10]
  return str
}

function numSymb(num) {
  let str = ''
  do {
    str = String.fromCharCode(97 + ((num + 25) % 26)) + str
  } while ((num = Math.floor(num / 10)))
  return str
}

function strToNum(str) {
  let sum = 0
  let c
  for (let i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    if (c > 47 && c < 58) sum += c - 48
    else if (c > 64 && c < 91) sum += c - 64
  }
  let arr = [Math.floor(sum / 10), sum % 10]

  return arr
}

document.addEventListener('keydown', event => {
  if (event.key == 'Enter') {
    let ans,
      str = document.getElementById('codewordInput').value
    str = str.toUpperCase().replace(/ /g, '')

    let length = str.length,
      superNum = strToNum(str)

    if (document.getElementById('checkbox').checked) {
      ans =
        numSymb(length) +
        'BY' +
        numSymb(superNum[0]) +
        length * superNum[0] +
        numSymb(length) +
        'BY' +
        numSymb(superNum[1]) +
        length * superNum[1]
    } else {
      ans =
        numName(length) +
        'BY' +
        numName(superNum[0]) +
        length * superNum[0] +
        numName(length) +
        'BY' +
        numName(superNum[1]) +
        length * superNum[1]
    }

    document.getElementById('passwordOutput').value = ans
  }
})

function coppy() {
  const copyText = document.getElementById('passwordOutput')
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  navigator.clipboard.writeText(copyText.value)

  copyText.setSelectionRange(99999, 99999)
}
