// ===================================
// ЗАВДАННЯ 1. Лічильник подій
// ===================================
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

const countItems = (array, condition) => {
  let count = 0;
  for (const element of array) {
    if (condition(element)) {
      count += 1;
    }
  }
  return count;
};

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

// ===================================
// ЗАВДАННЯ 2: Калькулятор з операціями
// ===================================
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Помилка: Ділення на нуль неможливе!';
  }
  return a / b;
};

const calculate = (a, b, operation) => {
  return operation(a, b);
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

// ===================================
// ЗАВДАННЯ 3: Генератор повідомлень
// ===================================
const repeatMessage = (times, messageCreator) => {
  for (let i = 0; i < times; i += 1) {
    console.log(messageCreator(i));
  }
};

const simpleMessage = (index) => `Повідомлення #${index + 1}.`;
const squareMessage = (index) => `Квадрат числа ${index} дорівнює ${index * index}.`;
const isEvenMessage = (index) => `Число ${index}: ${index % 2 === 0 ? 'Парне' : 'Непарне'}.`;

repeatMessage(3, simpleMessage);
repeatMessage(4, squareMessage);
repeatMessage(5, isEvenMessage);

// ===================================
// ЗАВДАННЯ 4: Кінотеатр
// ===================================
const movies = [
  { title: 'Dune', year: 2021, rating: 8.0, genre: 'Sci-Fi' },
  { title: 'Inception', year: 2010, rating: 8.8, genre: 'Sci-Fi' },
  { title: 'Parasite', year: 2019, rating: 8.6, genre: 'Thriller' },
  { title: 'Pulp Fiction', year: 1994, rating: 8.9, genre: 'Crime' },
];

const processMovies = (movies, action) => {
  for (let i = 0; i < movies.length; i += 1) {
    action(movies[i], i);
  }
};

const logTitleAndYear = (movie, index) => {
  console.log(`Фільм ${index + 1}: ${movie.title} (${movie.year})`);
};

const checkHighRating = (movie) => {
  if (movie.rating > 8.5) {
    console.log(`[⭐ Суперхіт] ${movie.title} з рейтингом ${movie.rating}.`);
  }
};

const addIsClassicStatus = (movie) => {
  if (movie.year < 2000) {
    movie.isClassic = true;
  } else {
    movie.isClassic = false;
  }
  console.log(`${movie.title}: Класика? ${movie.isClassic}`);
};

processMovies(movies, logTitleAndYear);
processMovies(movies, checkHighRating);
processMovies(movies, addIsClassicStatus);