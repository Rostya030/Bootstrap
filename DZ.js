const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

console.log('--- ЗАВДАННЯ 1 ---');
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);



const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(' ');
  const wordCount = words.length;
  return wordCount * pricePerWord;
};

console.log('--- ЗАВДАННЯ 2 ---');
console.log(calculateEngravingPrice('Proin sed massa eu erat consectetur', 10)); // 60
console.log(calculateEngravingPrice('Quisque velit nisi, pretium ut lacinia', 20)); // 140



const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log('--- ЗАВДАННЯ 3 ---');
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
console.log(findLongestWord('Google do a roll')); // Google



const formatString = function (string) {
  const maxLength = 40;

  if (string.length <= maxLength) {
    return string;
  }

  return string.slice(0, maxLength) + '...';
};

console.log('--- ЗАВДАННЯ 4 ---');
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));



const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();

  return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
};

console.log('--- ЗАВДАННЯ 5 ---');
console.log(checkForSpam('Latest technology trends and news')); // false
console.log(checkForSpam('GET FREE SALE NOW! limited time offer')); // true



const isLoginValid = function (login) {
  const minLength = 4;
  const maxLength = 16;
  const loginLength = login.length;

  return loginLength >= minLength && loginLength <= maxLength;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return 'Помилка! Логін повинен бути від 4 до 16 символів';
  }

  if (!isLoginUnique(allLogins, login)) {
    return 'Такий логін уже використовується!';
  }

  allLogins.push(login);
  return 'Логін успішно доданий!';
};

console.log('--- ЗАВДАННЯ 7 ---');
const logins = ['Poly', 'Mango', 'Ajax'];
console.log(addLogin(logins, 'Kiwi'));
console.log(addLogin(logins, 'Poly'));
console.log(logins);



let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt('Введіть число:');

  if (input === null) {
    break;
  }

  const number = Number(input);
  const isNumber = !Number.isNaN(number);

  if (!isNumber) {
    alert('Було введено не число, попробуйте ще раз');
    continue;
  }

  numbers.push(number);
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }

  console.log('--- ЗАВДАННЯ 6 ---');
  console.log(`Загальна сума чисел дорівнює ${total}`);
}