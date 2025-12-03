const bankAccount = {
  ownerName: "Олег Петренко",
  accountNumber: "UA1234567890",
  balance: 500.00,

  deposit() {
    const amountStr = prompt(`Поточний баланс: ${this.balance.toFixed(2)} грн. \nВведіть суму для поповнення:`);
    const amount = Number(amountStr);

    if (amount > 0 && !isNaN(amount)) {
      this.balance += amount;
      alert(`Рахунок успішно поповнено на ${amount.toFixed(2)} грн.\nНовий баланс: ${this.balance.toFixed(2)} грн.`);
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
        alert(`Помилка: Недостатньо коштів. Доступно: ${this.balance.toFixed(2)} грн.`);
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