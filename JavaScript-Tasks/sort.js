let numbers = [2, 9, 7, 1, 6, 3, 4, 0];

let i = 0;
while (i < numbers.length) {
  let lastIndex = numbers.length - i - 1;
  let smallestNumber = findSmallestNumber(numbers, lastIndex);
  //   console.log(`last index is: ${lastIndex} and smallest number is: ${smallestNumber}`);
  swap(numbers, smallestNumber, lastIndex);
  i++;
}

function findSmallestNumber(numbers, lastIndex) {
  let num = 100000000000;
  for (let i = 0; i <= lastIndex; i++) {
    num = Math.min(num, numbers[i]);
  }
  return num;
}

function swap(numbers, smallestNumber, lastIndex) {
  let temp = numbers[lastIndex];
  numbers[numbers.indexOf(smallestNumber)] = temp;
  numbers[lastIndex] = smallestNumber;

  //   console.log(numbers);
}

console.log(numbers);
