const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
console.log('--- ЗАВДАННЯ 1 (Вміст user) ---');
for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log('--- ЗАВДАННЯ 2 (countProps) ---');
console.log(countProps({}));
console.log(countProps({ a: 1, b: 2, c: 'test' }));

const findBestEmployee = function (employees) {
  const entries = Object.entries(employees);
  if (entries.length === 0) {
    return 'Немає співробітників';
  }

  let bestName = '';
  let maxTasks = 0;

  for (const [name, tasks] of entries) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestName = name;
    }
  }
  return bestName;
};

console.log('--- ЗАВДАННЯ 3 (findBestEmployee) ---');
console.log(
  findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 }),
);
console.log(
  findBestEmployee({ poly: 12, mango: 17, ajax: 4 }),
);

const countTotalSalary = function (employees) {
  let totalSalary = 0;
  const salaries = Object.values(employees);
  for (const salary of salaries) {
    totalSalary += salary;
  }
  return totalSalary;
};

console.log('--- ЗАВДАННЯ 4 (countTotalSalary) ---');
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, ajax: 50 }));

const getAllPropValues = function (arr, prop) {
  const values = [];
  for (const obj of arr) {
    if (obj.hasOwnProperty(prop)) {
      values.push(obj[prop]);
    }
  }
  return values;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

console.log('--- ЗАВДАННЯ 5 (getAllPropValues) ---');
console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const product of allProdcuts) {
    if (product.name === productName) {
      return product.price * product.quantity;
    }
  }
  return 0;
};

const allProducts = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

console.log('--- ЗАВДАННЯ 6 (calculateTotalPrice) ---');
console.log(calculateTotalPrice(allProducts, 'Радар'));
console.log(calculateTotalPrice(allProducts, 'Дроїд'));
console.log(calculateTotalPrice(allProducts, 'Монітор'));

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
Object.freeze(Transaction);

const account = {
  balance: 0,
  transactions: [],
  transactionId: 0,

  createTransaction(amount, type) {
    this.transactionId += 1;
    return { id: this.transactionId, amount: amount, type: type };
  },

  deposit(amount) {
    if (amount <= 0 || isNaN(amount)) {
      console.error('Сума поповнення має бути додатним числом.');
      return;
    }
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    console.log(`Поповнення на ${amount}. Поточний баланс: ${this.balance}`);
  },

  withdraw(amount) {
    if (amount <= 0 || isNaN(amount)) {
      console.error('Сума зняття має бути додатним числом.');
      return;
    }
    if (amount > this.balance) {
      console.error(`Зняття неможливе, недостатньо коштів. Баланс: ${this.balance}`);
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    console.log(`Зняття ${amount}. Поточний баланс: ${this.balance}`);
  },

  getBalance() { return this.balance; },
  getTransactionDetails(id) { return this.transactions.find(t => t.id === id); },
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};

console.log('--- ЗАВДАННЯ 7 (Інтернет-банк) ---');
account.deposit(1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(1500);

console.log('Поточний баланс:', account.getBalance());
console.log('Транзакція #3:', account.getTransactionDetails(3));
console.log('Всього поповнень:', account.getTransactionTotal(Transaction.DEPOSIT));

const interactiveBankAccount = {
  ownerName: "Олег Петренко",
  accountNumber: "UA1234567890",
  balance: 500.00,

  deposit() {
    const amountStr = prompt(`Поточний баланс: ${this.balance.toFixed(2)} грн. \nВведіть суму для поповнення:`);
    const amount = Number(amountStr);
    if (amount > 0 && !isNaN(amount)) {
      this.balance += amount;
      alert(`Рахунок успішно поповнено.\nНовий баланс: ${this.balance.toFixed(2)} грн.`);
    } else {
      alert("Помилка: Введена некоректна сума.");
    }
  },

  withdraw() {
    const amountStr = prompt(`Поточний баланс: ${this.balance.toFixed(2)} грн. \nВведіть суму для зняття:`);
    const amount = Number(amountStr);
    if (amount > 0 && !isNaN(amount)) {
      if (amount <= this.balance) {
        this.balance -= amount;
        alert(`Знято ${amount.toFixed(2)} грн.\nНовий баланс: ${this.balance.toFixed(2)} грн.`);
      } else {
        alert(`Помилка: Недостатньо коштів.`);
      }
    } else {
      alert("Помилка: Введена некоректна сума.");
    }
  },

  startTransaction() {
    const action = confirm("Натисніть OK, щоб поповнити (Deposit), або Cancel, щоб зняти (Withdraw).");
    if (action) {
      this.deposit();
    } else {
      this.withdraw();
    }
  }
};

const weather = {
  temperature: 0,
  humidity: 70,
  windSpeed: 5,

  checkFreezing() {
    const tempInput = prompt("Введіть поточну температуру (в градусах Цельсія):");
    this.temperature = Number(tempInput);
    const isFreezing = this.temperature < 0;

    if (isFreezing) {
      alert("Температура нижче 0 градусів Цельсія");
    } else {
      alert("Температура вище або дорівнює 0 градусів Цельсія");
    }
    return isFreezing;
  }
};

const loginUser = {
  name: "Іван",
  email: "ivan@example.com",
  password: "securePassword123",

  login() {
    const emailInput = prompt("Введіть Ваш email:");
    const passwordInput = prompt("Введіть Ваш пароль:");

    if (emailInput === this.email && passwordInput === this.password) {
      alert(`Успішний вхід! Ласкаво просимо, ${this.name}.`);
      return true;
    } else {
      alert("Помилка входу: Неправильний email або пароль.");
      return false;
    }
  }
};

const movie = {
  title: "Matrix",
  director: "Wachowskis",
  year: 1999,
  rating: 8.7,

  isHighRated() {
    return this.rating > 8;
  }
};

console.log("--- ДОДАТКОВЕ ЗАВДАННЯ (Об'єкт Movie) ---");
console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);
console.log(`Висновок: Рейтинг вище 8? ${movie.isHighRated()}`);
console.log("----------------------");