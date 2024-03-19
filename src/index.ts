//display greeting, account options (add, withdraw, view, transfer)

// 1. Created a class with constructor for bank accounts
class BankAccount {
    private balance: number = 0;

    constructor(balance: number) {
        this.balance = balance;
    }

    // 2. Created function to enable adding money from account
    deposit(amount: number): void {
        this.balance += amount;
    }

    // 3. Created function for withdrawing money from account, ensuring funds are sufficient to withdraw with if statement
    withdraw(amount: number): void {
        if(this.balance - amount < 0) {
            throw new Error("Insufficient Funds")
        } else {
            this.balance -= amount;
        }
    }

    // 4. Getter to display balance in account
    getBalance() {
        return this.balance;
    }
}

const currentAccount = new BankAccount(5000);
console.log("Account Balance: ", currentAccount.getBalance());

currentAccount.deposit(1300);
console.log("Account Balance: ", currentAccount.getBalance());

currentAccount.withdraw(2000);
console.log("Account Balance: ", currentAccount.getBalance());

// currentAccount.withdraw(100000);
// console.log("Account Balance: ", currentAccount.getBalance());

// const savingsAccount = new BankAccount(50000);
// console.log("Savings Balance: ", savingsAccount.getBalance());

// savingsAccount.deposit(15000);
// console.log("Savings Balance: ", savingsAccount.getBalance());

// savingsAccount.withdraw(100);
// console.log("Savings Balance: ", savingsAccount.getBalance());





// Basic Operations
//transfer to another account

// Check Minimum Balance

// Interest
// account has a % of interest
// get the interest amount
    //if the interest % is 0.01 (1%) and there is 1000$, interest would be 10$
    //do not modify savings, just know what the interest would be

// Interest Ceiling
//there is a limit on interest so the maximum to calculate on is $50,000
//if greater than $50,000 won't be calculated above this

//Favourite accounts
//we can access the list of favorite accounts
//we can add an account to the list
//we can remove an account from the list by its id