let array = [28, 43, -12, 30, 4, 0, 12]


let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}

console.log(value)

//code comment for run time: O(1)

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

//code comment for run time: O(1)


function makeUnique(str) {
    let uniqueStr = ""
  
    for (let i = 0; i < str.length; i++) {
      if (uniqueStr.includes(str[i])) {
        continue
      } else {
        uniqueStr += str[i]
      }
    }
    return uniqueStr
  }
  
  //code comment for run time:O(n)


  const find_Longest_Word = word => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    let vowelsNeeded = word.length / 2
    let wordSplit = word.toLowerCase().split('')
  
    for (let i = 0; i < wordSplit.length; i++) {
      let letter = wordSplit[i]
  
      if (vowels.includes(letter)) {
        vowelCount++
      }
  
      if (vowelCount > vowelsNeeded) {
        return true
      }
    }
  
    return false
  }
  
  //code comment for run time: O(n^2)