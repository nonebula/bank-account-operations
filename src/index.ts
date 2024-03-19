// 1. Created a class with constructor for bank accounts
class BankAccount {
  private balance: number;

  // 8. Interest related step
  private interestRate: number;
  private interestCeiling: number;

  // 10. Favorites creation, making a bank accounts array (default array needed otherwise will return error)
  private favoriteAccounts: BankAccount[] = [];
  private id;

  // 9. Interest rate and ceiling added to constructor parameters to feed into new function
  constructor(
    id: number,
    balance: number,
    interestRate: number,
    interestCeiling: number
  ) {
    this.id = id;
    this.balance = balance;
    this.interestRate = interestRate;
    this.interestCeiling = interestCeiling;
  }

  // 2. Created function to enable adding money from account
  deposit(amount: number): void {
    this.balance += amount;
  }

  // 3. Created function for withdrawing money from account, ensuring funds are sufficient to withdraw with if statement
  withdraw(amount: number): void {
    if (this.balance - amount < 0) {
      throw new Error("Insufficient Funds");
    } else {
      this.balance -= amount;
    }
  }

  // 4. Getter to display balance in account
  getBalance(): number {
    return this.balance;
  }

  // 7. Function to transfer funds. Withdraw already checking amount so no second check needed
  transferFunds(amount: number, account: BankAccount): void {
    this.withdraw(amount);
    account.deposit(amount);
  }

  getInterest(): number {
    if (this.balance > this.interestCeiling) {
      return this.interestCeiling * this.interestRate;
    } else {
      return this.balance * this.interestRate;
    }
  }

  // 11.Pushing and retrieving favorite into account array
  addAccountToFavorites(account: BankAccount): void {
    this.favoriteAccounts.push(account);
  }

  getFavoriteAccounts(): BankAccount[] {
    return this.favoriteAccounts;
  }

  removeFavoriteAccountById(id: number): void {
    const indexToRemove = this.favoriteAccounts.findIndex(
      (account: BankAccount) => account.id === id
    );
    if (indexToRemove === -1) {
      throw new Error("Account not found in favorites");
    }
    this.favoriteAccounts.splice(indexToRemove, 1);
  }
}

// Provided story run-through

const accountOne = new BankAccount(172849, 40000, 0.01, 50000);
const accountTwo = new BankAccount(192848, 100000, 0.01, 50000);

accountOne.addAccountToFavorites(accountTwo);

accountOne.transferFunds(20000, accountOne.getFavoriteAccounts()[0]);

try {
  accountOne.withdraw(25000);
} catch (err: unknown) {
  console.log((err as Error).message);
}

console.log("Account Interest: ", accountOne.getInterest());
console.log("Account Balance: ", accountOne.getBalance());

accountOne.removeFavoriteAccountById(192848);

//Remaining notes from process.

// 5. Testing steps 1-4 and console logging
/*
const currentAccount = new BankAccount(5000);
console.log("Account Balance: ", currentAccount.getBalance());

currentAccount.deposit(1300);
console.log("Account Balance: ", currentAccount.getBalance());

currentAccount.withdraw(2000);
console.log("Account Balance: ", currentAccount.getBalance());

// 6. try and catch. Error type unknown by default and then forced as type 'Error'
try{
    currentAccount.withdraw(100000);
} catch(err: unknown) {
    console.log((err as Error).message);
}
*/
