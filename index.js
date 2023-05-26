//banking management system 

class BankAccount {
    //constructor
    constructor(accountNumber, accountHolder, balance) {
        this.#accountNumber = accountNumber;
        this.#accountHolder = accountHolder;
        this.#balance = balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getAccountHolder() {
        return this.#accountHolder;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
        console.log(`The deposited ${amount} was deposited to ${this.accountNumber}`);

    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`The ${amount} was withdrawn from this account ${this._accountNumber}`);
        } else {
            console.log("Your balance is insufficient.");
        }
    }



}


class SavingsAccount extends BankAccount() {

    constructor(accountNumber, accountHolder, balance, interestRate) {
        super(accountNumber, accountHolder, balance);
        this.#interestRate = interestRate;
    }

    calculateInterest() {
        let interest = this.#balance * this.#interestRate / 100;
        console.log(`Interest for this account ${this.#accountNumber} is: ${interest}`)

    }
}

class CheckingAccount extends BankAccount() {
    constructor(accountNumber, accountHolder, balance, overDraftLimit) {
        super(accountNumber, accountHolder, balance);
        this.#overDraftLimit = overDraftLimit;
    }

    get overDraftLimit() {
        return this.#overDraftLimit;
    }

    set overDraftLimit(limit) {
        this.#overDraftLimit = limit;
    }

    withdraw(amount) {
        if (amount <= this.#balance + this.#overDraftLimit) {
            this.#balance -= amount;
            console.log(`The ${amount} withdrawn is from this account ${this.#accountNumber}`);
        } else {
            console.log("You exceeded the overdraft limit")
        }
    }
}


// Create instances of each account type
let savingsAccount = new SavingsAccount("AKL0098", "Mary Jane", 5000, 0.05);
let checkingAccount = new CheckingAccount("IKJ978", "Ryan Reynolds", 3000, 2000);

// Retrieve account information
console.log("Savings Account Information:");
console.log("The Account Number:", savingsAccount.accountNumber);
console.log("The Account Holder:", savingsAccount.accountHolder);
console.log("The Balance:", savingsAccount.balance);

console.log("\nChecking Account Information:");
console.log("The Account Number:", checkingAccount.accountNumber);
console.log("The Account Holder:", checkingAccount.accountHolder);
console.log("The Balance:", checkingAccount.balance);

// The Deposited money into accounts
savingsAccount.deposit(1000);
checkingAccount.deposit(500);

// The Withdrawn money from accounts
savingsAccount.withdraw(200);
checkingAccount.withdraw(4000);

// Calculate interest for savings account
savingsAccount.calculateInterest();

// Update overdraft limit for checking account
checkingAccount.overdraftLimit = 3000;
console.log("The Updated Overdraft Limit:", checkingAccount.overdraftLimit);