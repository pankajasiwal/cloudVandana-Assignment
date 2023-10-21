let sentence = 'this is sunny day';

let wordArr = sentence.split(' ');

for (let i = 0; i < wordArr.length; i++) {
  wordArr[i] = reverse(wordArr[i]);
}

function reverse(word) {
  let reversedWord = '';
  for (let i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }
  // console.log(reversedWord);
  return reversedWord;
}

console.log(wordArr.join(' '));
